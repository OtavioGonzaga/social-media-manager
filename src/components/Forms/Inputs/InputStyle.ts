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
	&.redborder {
		border: 2px solid rgb(999, 0, 0, 0.5);
	}
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
	&& svg {
		flex: 10%;
	}
	&& span {
		flex: 5%;
		color: white !important;
	}
`
export const Warning = styled.div`
	margin-bottom: 10px;
	display: flex;
	width: 100%;
	align-items: center;
	color: red;
	&& svg {
		margin: 0 10px;
	}
	&& p {
		font-size: 80%;
		width: 90%;
		display: inline-block;
	}
	&& p::first-letter {
		text-transform: uppercase;
	}
`