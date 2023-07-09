import Card from '../../components/Card/Card'
import LoginForm from '../../components/Forms/LoginForm/LoginForm'
import * as S from './HomeStyle'

export default function Home() {
	return (
		<S.section>
		<S.Welcome>
			<h1>Social Media Manager</h1>
			<span>Simplify your online presence</span>
			<p>Connect to your social networks, view your statistics and manage your publications!</p>
			<Card Component={<LoginForm HandleSubmit={() => {}} />} />
		</S.Welcome>
		<S.Image>
			<img src="img/971.jpg" alt="Imagem de fullvector no Freepik" />
			<small><a href="https://br.freepik.com/vetores-gratis/smm-promocao-na-internet-publicidade-online-anuncio-pesquisa-de-mercado-crescimento-de-vendas-profissional-de-marketing-com-personagem-de-desenho-animado-de-laptop-e-alto-falante-ilustracao-em-vetor-conceito-metafora-isolado_12083622.htm#query=marketing&position=29&from_view=search&track=sph">Image by vectorjuice</a> on Freepik</small>
		</S.Image>
		</S.section>
	)
}