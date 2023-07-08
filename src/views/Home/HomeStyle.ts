import styled from 'styled-components'

export const section = styled.section`
	display: flex;
	flex-wrap: wrap;
`

export const Image = styled.div`
	width: 45%;
	&& > * {
		display: block;
		text-align: center;
	}
`

export const Welcome = styled.div`
	width: 45%;
	margin: 10% 10% 0 0;
	&& h1 {
		letter-spacing: 2px;
		font-weight: bold;
		font-size: 45px;
		color: #5f4990;
	}
	&& span {
		font-weight: 600;
		color: #7460e3;
	}
	&& p {
		margin-top: 15px;
	}
`