import Card from '../../components/Card/Card'
import LoginForm from '../../components/Forms/LoginForm/LoginForm'
import * as S from './HomeStyle'
import { useState, SyntheticEvent, BaseSyntheticEvent, useContext, useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Home() {
	const AuthState = useContext(AuthContext)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const history = useNavigate()

	useEffect(() => {
		if (AuthState.isAuthenticated) history('/dashboard')
	}, [AuthState.isAuthenticated, history])

	function HandleOnChange(e: BaseSyntheticEvent) {
		e.target.name === 'email'? setEmail(e.target.value) : setPassword(e.target.value)
	}
	
	function HandleOnSubmit(e: SyntheticEvent) {
		e.preventDefault()
		axios.post(`${process.env.REACT_APP_API_URL}/login`, {email: email, password: password}).then(res => {
			localStorage.setItem('token', res.data.token)
		}).catch(err => {
			console.log(err)
		})
	}
	
	return (
		<S.section>
		<S.Welcome>
			<h1>Social Media Manager</h1>
			<span>Simplify your online presence</span>
			<p>Connect to your social networks, view your statistics and manage your publications!</p>
			<Card Component={<LoginForm HandleSubmit={HandleOnSubmit} HandleChange={HandleOnChange} />} />
		</S.Welcome>
		<S.Image>
			<img src="img/971.jpg" alt="Imagem de fullvector no Freepik" />
			<small><a href="https://br.freepik.com/vetores-gratis/smm-promocao-na-internet-publicidade-online-anuncio-pesquisa-de-mercado-crescimento-de-vendas-profissional-de-marketing-com-personagem-de-desenho-animado-de-laptop-e-alto-falante-ilustracao-em-vetor-conceito-metafora-isolado_12083622.htm#query=marketing&position=29&from_view=search&track=sph">Image by vectorjuice</a> on Freepik</small>
		</S.Image>
		</S.section>
	)

}