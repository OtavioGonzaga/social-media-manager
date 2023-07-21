import styled, { keyframes } from "styled-components"

const spinAnimation = keyframes`
	0% { transform: rotate(0deg) }
	100% { transform: rotate(360deg) }
`

export const Load = styled.div`
	position: absolute;
	top: 0;
	background-color: rgba(190, 190, 190, .2);
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	&& svg {
		font-size: 300%;
		animation: ${ spinAnimation } 1s linear infinite;
	}
`