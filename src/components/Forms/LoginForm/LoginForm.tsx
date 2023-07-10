import FullButton from "../../Buttons/FullButton/FullButton"
import Input from "../Inputs/Input"
import * as S from './LoginFormStyle'
import { HiOutlineMail, HiKey } from 'react-icons/hi'
import { FaGoogle, FaFacebook } from 'react-icons/fa'
interface props {
	HandleSubmit: (e: any) => void
}

export default function LoginForm({HandleSubmit}: props) {
	//TODO: Redirecionar e criar rotas de login
	return (
		<>
		<S.form onSubmit={HandleSubmit}>
			<h3>Log in to your account</h3>
			<p className="disabled">Don't have an account? <a href="/signup">Sign Up</a></p>
			<Input type='text' name="email" placeholder='Type your e-mail...' text='E-mail:' InputIcon={HiOutlineMail} value='' />
			<Input type='password' name='password' placeholder='Type your password...' text='Password:' InputIcon={HiKey} value="" />
			<div className="continuewith">
				<S.ContinueWith href='/'>
					<FaGoogle />
					Google
				</S.ContinueWith>
				<S.ContinueWith href="/">
					<FaFacebook />
					Facebook
				</S.ContinueWith>
			</div>
			<FullButton text="Log In" />
		</S.form>
		</>
	)
}