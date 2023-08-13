import axios from "axios"

interface props {
	type: string,
	email: string,
	password: string,
	name?: string,
	passwordTwo?: string
}

interface ReturnVal {
	email: string[],
	password: string[],
	name: string[]
} 

export default async function FormsValidation({type = '', email = '', password = '', name = '', passwordTwo = ''}: props): Promise<ReturnVal | null> {
	let errors: ReturnVal = {
		email: [],
		password: [],
		name: []
	}
	
	try {
		if (type === 'login') {
			const {status} = await axios.get(`${process.env.REACT_APP_API_URL}/${password}`)
			if (status === 401) {
				errors.password.push('wrong password')
			} else if (status !== 200) return null
		}
		
		if (type === 'register') {
			if (email.length > 0) {
				const { status } = await axios.get(`${process.env.REACT_APP_API_URL}/databasequery/Users/${email}`)
				if (status === 500) return null
				if (status === 200) {
					errors.email.push('already exists an account with the specified email')
					return errors
				} 
			}
				
			if (password === passwordTwo) errors.password.push('password checker must be equal to the password')
			if (password.length < 8) errors.password.push('the password must be at least 8 characters')
			if (password.length > 30) errors.password.push('the password must have a maximum of 30 characters')
			if (password.includes(' ')) errors.password.push('the password must not have spaces')
		
			if (/[^a-zA-Z\s]/.test(name)) errors.name.push('the name must not contain invalid characters (Ex.: !@#$%¨&*)')
			if (name.length < 3) errors.name.push('the name must be at least 3 characters')
			if (name.length > 25) errors.name.push('the name must be less than 25 characters')
		}
	
		if (!email.includes('@') || !email.includes('.') || email.length > 150) errors.email.push('enter a valid email')
		if (email.length < 6) errors.email.push('the email must be at least 7 characters')
		if (!password || password.length === 0) errors.password.push('the password must be provided')

		return errors
	} catch (error) {
		console.error(error)
		return null
	}
}