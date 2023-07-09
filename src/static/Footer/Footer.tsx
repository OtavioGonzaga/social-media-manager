import * as S from './FooterStyle'
export default function Footer(): JSX.Element {
	const currentYear = new Date().getFullYear()

	return (
		<S.Footer>
			<img src="img/logo.png" alt="" />
			<p>Otavio Luiz Gonzaga &copy; 2023-{currentYear} All rights reserved</p>
		</S.Footer>
	)
}