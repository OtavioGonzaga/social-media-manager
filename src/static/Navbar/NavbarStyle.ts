import styled from 'styled-components'
export const Header = styled.header`
	display: flex;
	background-color: #200f23;
	justify-content: space-between;
	align-items: center;
	height: 10vh;
	padding: 0 10%;
	width: 80%;
`
export const Logo = styled.div`
	display: flex;
	width: 50%;
	&& a img {
		width: 40%;
	}
`
export const Menu = styled.nav`
	width: 30%;
	display: flex;
	justify-content: space-between;
`