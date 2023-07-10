import styled from 'styled-components'

export const Input = styled.div`
	color: white;
	padding: 8px;
	margin: 10px 0 10px 2%;
	width: 90%;
	border: 2px solid #c5c5c5;
	border-radius: 8px;
	display: flex;
	justify-content: space-between;
	&& input {
		color: white;
		padding: 0;
		border: 0;
		margin: 0;
		outline: none;
		box-shadow: none;
		background-color: transparent;
		width: 90%;
	}
	&& span {
		position: absolute;
		left: 40%;
		color: white !important;
	}
`