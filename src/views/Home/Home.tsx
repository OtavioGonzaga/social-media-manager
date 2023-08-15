import Card from '../../components/Card/Card'
import LoginForm from '../../components/Forms/LoginForm/LoginForm'
import * as S from './HomeStyle'
import { useState, SyntheticEvent, BaseSyntheticEvent, useContext, useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'

export default function Home() {
	const AuthState = useContext(AuthContext)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const history = useNavigate()

	useEffect(() => {
		if (AuthState.isAuthenticated) history('/dashboard')
	}, [AuthState.isAuthenticated, history])

	function HandleOnChange(e: BaseSyntheticEvent) {
		e.target.name === 'email'? setEmail(e.target.value) : setPassword(e.target.value)
	}
	
	function HandleOnSubmit(e: SyntheticEvent) {
		e.preventDefault()
		setLoading(true)
		axios.post(`${process.env.REACT_APP_API_URL}/login`, {email: email, password: password}).then(res => {
			if (res.status === 204) {
				//TODO: menssagem de falha na autenticação
			} else {
				localStorage.setItem('token', res.data.token)
				AuthState.setIsAuthenticated(true)
			}
		}).catch(err => {
			console.log(err)
		})
	}
	
	if (loading) return <Loading />

	return (
		<S.section>
		<S.Welcome>
			<h1>Social Media Manager</h1>
			<span>Simplify your online presence</span>
			<p>Connect to your social networks, view your statistics and manage your publications!</p>
			<Card>
				<LoginForm HandleSubmit={HandleOnSubmit} HandleChange={HandleOnChange} />
			</Card>
		</S.Welcome>
		<S.Image>
			<img src="img/971.jpg" alt="Imagem de fullvector no Freepik" />
			<small><a target='_blank' rel='noreferrer' href="https://br.freepik.com/vetores-gratis/smm-promocao-na-internet-publicidade-online-anuncio-pesquisa-de-mercado-crescimento-de-vendas-profissional-de-marketing-com-personagem-de-desenho-animado-de-laptop-e-alto-falante-ilustracao-em-vetor-conceito-metafora-isolado_12083622.htm#query=marketing&position=29&from_view=search&track=sph">Image by vectorjuice</a> on Freepik</small>
		</S.Image>
		</S.section>
	)

}