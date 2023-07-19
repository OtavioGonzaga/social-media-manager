import FullButton from "../../Buttons/FullButton/FullButton"
import Input from "../Inputs/Input"
import * as S from './LoginFormStyle'
import { HiOutlineMail, HiKey } from 'react-icons/hi'
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import { BaseSyntheticEvent, SyntheticEvent } from "react"
import { useNavigate } from "react-router-dom"
interface props {
	HandleSubmit: (e: SyntheticEvent) => void
	HandleChange: (e: BaseSyntheticEvent) => void
}

export default function LoginForm({HandleSubmit, HandleChange}: props) {
	const history = useNavigate()

	return (
		<>
		<S.form onSubmit={HandleSubmit}>
			<h3>Log in to your account</h3>
			<p className="disabled">Don't have an account? <span className="link" onClick={() => history('/signup')}>Sign Up</span></p>
			<Input type='text' name="email" placeholder='Type your e-mail...' text='E-mail:' InputIcon={HiOutlineMail} HandleChange={HandleChange} />
			<Input type='password' name='password' placeholder='Type your password...' text='Password:' InputIcon={HiKey} HandleChange={HandleChange}/>
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
			<FullButton text="Log In" submit={true} />
		</S.form>
		</>
	)
}