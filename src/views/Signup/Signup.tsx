import { BaseSyntheticEvent, SyntheticEvent, useState } from 'react'
import * as S from './SignupStyle'
import Input from '../../components/Forms/Inputs/Input'
import { BsFillPersonFill } from 'react-icons/bs'
import { HiOutlineMail, HiKey } from 'react-icons/hi'
import axios from 'axios'
import FullButton from '../../components/Buttons/FullButton/FullButton'
import Message from '../../components/message/Message'
import Card from '../../components/Card/Card'
import Loading from '../../components/Loading/Loading'
import FormsValidation from '../../helpers/FormsValidation'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
	const [user, setUser] = useState({name: '', email: '', password: '', passwordtwo: ''})
	const [message, setMessage] = useState('')
	const [loading, setLoading] = useState(false)
	const [EmailWarning, setEmailWarning] = useState('')
	const [PasswordWarning, setPasswordWarning] = useState('')
	const [NameWarning, setNameWarning] = useState('')
	const history = useNavigate()

	async function SubmitForm(e: SyntheticEvent) {
		e.preventDefault()
		setLoading(true)
		setMessage('')

		const validation = await FormsValidation({type: 'register', name: user.name, email: user.email, password: user.password, passwordTwo: user.password})
		
		if (validation) {
			if (validation && validation.name.length === 0 && validation.email.length === 0 && validation.name.length === 0) {
				axios.post(process.env.REACT_APP_API_URL + '/signup', user).then(res => {
					if (res.status === 200) {
						setMessage(res.data.join(', '))
					} else if (res.status === 201) {
						setLoading(false)
						history('/dashboard')
					}
				}).catch(err => {
					setMessage('Looks like we had a problem...')
					setLoading(false)
					console.error(err)
				})
			} else {
				setEmailWarning(validation.email.join(', '))
				setNameWarning(validation.name.join(', '))
				setPasswordWarning(validation.password.join(', '))
				setLoading(false)
			}
		} else {
			setMessage('Looks like we had a problem...')
			setLoading(false)
		}
	}

	function handleOnChange(e: BaseSyntheticEvent) {
		setUser({...user, [e.target.name]: e.target.value})
	}

	
	return (
		<>
		{loading && <Loading />}
		<S.Section>
			<Message text={message} type='error' />
			<Card CustomClass='half'>
				<form onSubmit={SubmitForm}>
					<h2>Register your account:</h2>
					<Input type='text' name='name' placeholder='Type your name...' InputIcon={BsFillPersonFill} text='Name:' HandleChange={handleOnChange} Warning={NameWarning} />
					<Input type='email' name='email' placeholder='Type your email...' InputIcon={HiOutlineMail} HandleChange={handleOnChange} Warning={EmailWarning} text='Email:' />
					<Input type='password' name='password' placeholder='Type your password...' InputIcon={HiKey} HandleChange={handleOnChange} Warning={PasswordWarning} text='Password:' />
					<Input type='password' name='passwordtwo' placeholder='Confirm your password...' InputIcon={HiKey} HandleChange={handleOnChange} Warning={PasswordWarning} text='Confirm your password:' />
					<FullButton text='Create account' submit={true} />
				</form>
			</Card>
		</S.Section>
		</>
	)
}