import axios from "axios"

interface props {
	type: string,
	email: string,
	password: string,
	name?: string,
	passwordTwo?: string
}

export default async function FormsValidation({type, email, password, name, passwordTwo}: props): Promise<object[]> {
	let errors = [{}]

	if (type === 'login') {
		const {data, status} = await axios.get(`${process.env.REACT_APP_API_URL}/databasequery/Users/${email}`)
		if (status === 200 && data !== null) errors.push({email: 'Already exists an account with the specified email'})

		
	}

	if (type === 'register') {
		axios.get(`${process.env.REACT_APP_API_URL}/databasequery/Users/${email}`)
	}

	return errors
}