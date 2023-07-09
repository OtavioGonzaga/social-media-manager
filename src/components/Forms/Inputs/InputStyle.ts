import styled from 'styled-components'

export const Input = styled.div`
	background-color: white;
	color: black;
	padding: 6px;
	margin: 10px 0 10px 2%;
	width: 90%;
	border: 2px solid #d7dee8;
	border-radius: 8px;
	display: flex;
	justify-content: space-between;
	&& input {
		padding: 0;
		border: 0;
		margin: 0;
		outline: none;
		box-shadow: none;
		background-color: transparent;
		width: 90%;
	}
`