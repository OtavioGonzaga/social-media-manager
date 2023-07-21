import styled from "styled-components"

export default function SMessage(type: string) {
	let color = type === 'success' ? 'rgba(0, 255, 0, 0.5)' : 'rgba(255, 0, 0, 0.5)';
	let border = type === 'success' ? '#17da1a' : '#ff0808';
	return styled.div`
		display: flex;
		margin-top: 10px;
		padding: 1% 2%;
		border-radius: 10px;
		border: ${border} solid 2px;
		position: absolute;
		animation-duration: 5s;
		animation-iteration-count: 1;
		width: 70%;
		background-color: ${color};
		align-items: center;
		justify-content: space-between;
		&& button {
			background-color: transparent;
			color: white;
		}
		&& button:hover {
			cursor: pointer;
		}
		&& p {
			text-transform: capitalize;
			color: ${border};
			width: 95%;
		}
	`
}