import * as S from './FullButtonStyle'

interface props {
	text: string
}

export default function FullButton({ text }: props) {
	return <S.button type='submit' >{text}</S.button>
}