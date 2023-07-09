import * as S from "./NavbarStyle"
import { Link } from 'react-router-dom'
export default function Navbar() {
	return (
		<S.Header>
				<S.Logo>
					<Link to='/'><img src="img/logo.png" alt="logo" /></Link>
            	</S.Logo>
            <S.Menu>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
				<Link to="/login">Profile</Link>
            </S.Menu>
		</S.Header>
	)
}