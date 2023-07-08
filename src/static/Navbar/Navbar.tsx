import * as S from "./NavbarStyle"
import { Link } from 'react-router-dom'
export default function Navbar() {
	return (
		<S.Header>
            <Link to='/'>
				<S.Logo>
					<img src="img/logo.png" alt="logo" />
            	</S.Logo>
            </Link>
            {/* <S.Menu>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </S.Menu> */}
		</S.Header>
	)
}