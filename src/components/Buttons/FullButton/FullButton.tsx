import * as S from './FullButtonStyle'

interface props {
	text: string,
	submit?: boolean
}

export default function FullButton({ text, submit }: props) {
	if (submit) return <S.button type='submit' >{text}</S.button>
	return <S.button>{text}</S.button>
}