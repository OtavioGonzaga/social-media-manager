import styled from 'styled-components'

export const form = styled.form`
	margin-top: 10px;
	&& h3 {
		font-size: 150%;
		margin: 0;
	}
	&& p {
		margin: 0 0 10px 0;
	}
	&& .continuewith {
		display: flex;
		width: 100%;
		justify-content: space-around;
		margin-top: 15px;
	}
`

export const ContinueWith = styled.a`
	color: white;
	border: 3px solid white;
	padding: 5px;
	border-radius: 10px;
	transition: .3s;
	&&:hover {
		text-decoration: none;
		color: #faa54a;
		border-color: #faa54a;
	}
	&& svg {
		margin-right: 5px;
	}
`