import { IconType } from 'react-icons'
import * as S from './InputStyle'

interface props {
	InputIcon?: IconType,
	name: string,
	text: string,
	type: string,
	placeholder: string,
	value: string
}

export default function Input({ name = '', text = '', type = 'text', placeholder = '', value = '', InputIcon }: props) {
	return (
		<>
		<label htmlFor={name}>{text}</label>
		<S.Input>
			{InputIcon && <InputIcon />}
			<input type={type} placeholder={placeholder} name={name} id={name} value={value}/>
		</S.Input>
		</>
	)
}