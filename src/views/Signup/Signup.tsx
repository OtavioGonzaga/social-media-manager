import { SyntheticEvent } from 'react'
import * as S from './SignupStyle'
import Input from '../../components/Forms/Inputs/Input'
import { BsFillPersonFill } from 'react-icons/bs'
import { HiOutlineMail, HiKey } from 'react-icons/hi'

export default function Signup() {
	function SubmitForm(e: SyntheticEvent) {
		e.preventDefault()
		console.log(e.target)
	}

	function handleOnChange() {

	}

	return (
		<S.Section>
			<form onSubmit={SubmitForm}>
				<h2>Register your account:</h2>
				<Input type='text' name='name' placeholder='Type your name...' InputIcon={BsFillPersonFill} text='Name:' HandleChange={handleOnChange} />
				<Input type='email' name='email' placeholder='Type your email...' InputIcon={HiOutlineMail} HandleChange={handleOnChange} text='Email:' />
				<Input type='password' name='password' placeholder='Type your password...' InputIcon={HiKey} HandleChange={handleOnChange} text='Password:' />
				<Input type='password' name='passwordtwo' placeholder='Confirm your password...' InputIcon={HiKey} HandleChange={handleOnChange} text='Confirm your password:' />
			</form>
		</S.Section>
	)
}