import { IconType } from 'react-icons'
import * as S from './InputStyle'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { BaseSyntheticEvent, useState } from 'react'
interface props {
	InputIcon?: IconType,
	name: string,
	text: string,
	type: string,
	placeholder: string,
	HandleChange: (e: BaseSyntheticEvent) => void,
	minLength?: number
}

export default function Input({ name = '', text = '', type = 'text', placeholder = '', InputIcon, HandleChange = (e) => {console.log(e)}, minLength=0 }: props) {
	const [visible, setVisible] = useState(false)
	return (
		<>
		<label htmlFor={name}>{text}</label>
		<S.Input>
			{InputIcon && <InputIcon />}
			<input type={visible? 'text' : type} placeholder={placeholder} name={name} id={name} onChange={HandleChange} minLength={minLength}/>
			{visible && <span onClick={() => setVisible(!visible)}><FaEye /></span>}
			{type === 'password' && !visible && <span onClick={() => setVisible(!visible)}><FaEyeSlash /></span>}
		</S.Input>
		</>
	)
}