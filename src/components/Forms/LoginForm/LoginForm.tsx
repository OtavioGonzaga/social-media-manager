import FullButton from "../../Buttons/FullButton/FullButton"
import Input from "../Inputs/Input"
import * as S from './LoginFormStyle'
import { HiOutlineMail, HiKey } from 'react-icons/hi'

interface props {
	HandleSubmit: () => any
}

export default function LoginForm({HandleSubmit}: props) {
	return (
		<>
		<S.form onSubmit={HandleSubmit}>
			<h3>Log in to your account</h3>
			<p className="disabled">Don't have an account? <a href="/signup">Sign Up</a></p>
			<Input type='text' name="email" placeholder='Type your e-mail...' text='E-mail:' InputIcon={HiOutlineMail} value='' />
			<Input type='password' name='password' placeholder='Type your password...' text='Password:' InputIcon={HiKey} value="" />
			<FullButton text="Log In" />
		</S.form>
		</>
	)
}