import * as S from './CardStyle'

interface props {
	Component: JSX.Element
}

export default function LoginCard({Component}: props) {
	return (
		<>
		<S.Card>
			{Component}
		</S.Card>
		</>
	)
}