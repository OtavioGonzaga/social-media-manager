import { IconType } from 'react-icons'
import * as S from './InputStyle'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { BiSolidErrorCircle } from 'react-icons/bi'
import { BaseSyntheticEvent, useState } from 'react'
interface props {
	InputIcon?: IconType
	name: string
	text: string
	type: string
	placeholder: string
	HandleChange: (e: BaseSyntheticEvent) => void
	minLength?: number
	maxLength?: number
	Warning?: string
}

export default function Input({ name = '', text = '', type = 'text', placeholder = '', Warning = '', InputIcon, HandleChange = (e) => {console.log(e)}, minLength=0, maxLength=99999999999 }: props) {
	const [visible, setVisible] = useState(false)
	return (
		<>
		<label htmlFor={name}>{text}</label>
		<S.Input className={Warning.length > 0? 'redborder': ''}>
			{InputIcon && <InputIcon />}
			<input type={visible? 'text' : type} placeholder={placeholder} name={name} id={name} onChange={HandleChange} minLength={minLength} maxLength={maxLength}/>
			{visible && <span onClick={() => setVisible(!visible)}><FaEye /></span>}
			{type === 'password' && !visible && <span onClick={() => setVisible(!visible)}><FaEyeSlash /></span>}
		</S.Input>
		{Warning?.length > 0 && <S.Warning><BiSolidErrorCircle /><p>{Warning}</p></S.Warning>}
		</>
	)
}