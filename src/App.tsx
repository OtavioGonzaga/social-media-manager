import Footer from "./static/Footer/Footer"
import Navbar from "./static/Navbar/Navbar"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from "./views/Home/Home"
import Profile from "./views/Profile/Profile"
import { AuthContextProvider } from "./contexts/AuthContext"
import Signup from "./views/Signup/Signup"

export default function App() {
	return (
		<AuthContextProvider>
			<div className="main_container">
				<Router>
					<Navbar />
					<Routes>
						<Route path="/signup" element={<Signup />}/>
						<Route path="/" element={<Home />} />
						<Route path="/Profile"  element={<Profile />} />
					</Routes> 
				</Router>
			</div>
			<Footer />
		</AuthContextProvider>
	)
}