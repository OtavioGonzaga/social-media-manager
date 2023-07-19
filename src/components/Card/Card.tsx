import * as S from './CardStyle'

interface props {
	children: JSX.Element,
	CustomClass?: string
}

export default function Card(props: props) {
	return (
		<>
		<S.Card className={props.CustomClass}>
			{props.children}
		</S.Card>
		</>
	)
}