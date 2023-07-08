import Footer from "./static/Footer/Footer";
import Navbar from "./static/Navbar/Navbar";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from "./views/Home/Home";
import Profile from "./views/Profile/Profile";
export default function App() {
	return (
		<>
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Profile"  element={<Profile />} />
			</Routes> 
		</Router>
		<Footer />
		</>
	)
}