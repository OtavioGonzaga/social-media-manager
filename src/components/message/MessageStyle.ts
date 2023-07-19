import styled, { keyframes } from "styled-components"

const animation = keyframes`
	0% {
		visibility: visible;
		opacity: 0;
	};
	20% {
		opacity: 1;
	};
	80% {
		opacity: 1;
	};
	100% {
		opacity: 0;
		visibility: hidden;
	}
`

export default function SMessage(type: string) {
	let color = type === 'success' ? 'green' : 'red';
	return styled.div`
	animation-name: ${animation};
	visibility: hidden;
	position: absolute;
	animation-duration: 5s;
	animation-iteration-count: 1;
	width: 80%;
	height: 20px; 
	background-color: ${color};
`}