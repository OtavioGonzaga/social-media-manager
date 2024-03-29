import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import Loading from '../components/Loading/Loading'

interface AuthContextTypes {
	isAuthenticated: boolean,
	setIsAuthenticated: any,
	email: string | null,
	setEmail: any,
	name: string | null,
	setName: any,
	logout: () => void
}

export const AuthContext = createContext<AuthContextTypes>({
	isAuthenticated: false,
	setIsAuthenticated: false,
	email: null,
	setEmail: null,
	name: null,
	setName: null,
	logout: () => {}
})

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
	const [email, setEmail] = useState(null)
	const [name, setName] = useState(null)
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [loading, setLoading] = useState(true)

	function logout() {
		localStorage.removeItem('token')
	}

	useEffect(() => {
		axios.post(`${process.env.REACT_APP_API_URL}/`, {token: localStorage.getItem('token')}).then(res => {
			setLoading(false)
			setIsAuthenticated(res.status === 200 ? true : false)
		}).catch(err => {
			console.error(err)
			logout()
			setLoading(false)
		})
	}, [])

	if (loading) return <Loading />

	return (
		<AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, email, setEmail, name, setName, logout}}>
			{children}
		</AuthContext.Provider>
	)
}