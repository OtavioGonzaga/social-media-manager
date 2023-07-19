import { BaseSyntheticEvent, SyntheticEvent, useState } from 'react'
import * as S from './SignupStyle'
import Input from '../../components/Forms/Inputs/Input'
import { BsFillPersonFill } from 'react-icons/bs'
import { HiOutlineMail, HiKey } from 'react-icons/hi'
import axios from 'axios'
import FullButton from '../../components/Buttons/FullButton/FullButton'
import Message from '../../components/message/Message'
import Card from '../../components/Card/Card'

export default function Signup() {
	const [user, setUser] = useState({})
	const [message, setMessage] = useState('')

	function SubmitForm(e: SyntheticEvent) {
		e.preventDefault()
		axios.post(process.env.REACT_APP_API_URL + '/signup', user).then(res => {
			if (res.status === 200) {
				setMessage(res.data.join(', '))	
			}
		}).catch(err => {
			console.error(err)
		})
	}

	function handleOnChange(e: BaseSyntheticEvent) {
		setUser({...user, [e.target.name]: e.target.value})
	}

	return (
		<S.Section>
			{message && (
				<Message text={message} type='error' />
			)}
			<Card CustomClass='half'>
				<form onSubmit={SubmitForm}>
					<h2>Register your account:</h2>
					<Input type='text' name='name' placeholder='Type your name...' InputIcon={BsFillPersonFill} text='Name:' HandleChange={handleOnChange} />
					<Input type='email' name='email' placeholder='Type your email...' InputIcon={HiOutlineMail} HandleChange={handleOnChange} text='Email:' />
					<Input type='password' name='password' placeholder='Type your password...' InputIcon={HiKey} HandleChange={handleOnChange} text='Password:' />
					<Input type='password' name='passwordtwo' placeholder='Confirm your password...' InputIcon={HiKey} HandleChange={handleOnChange} text='Confirm your password:' />
					<FullButton text='Create account' submit={true} />
				</form>
			</Card>
		</S.Section>
	)
}