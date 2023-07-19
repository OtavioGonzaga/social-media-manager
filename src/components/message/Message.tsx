import SMessage  from './MessageStyle'
interface props {
	text: string
	type: string
}

export default function Message({ text, type }: props) {
	const MessageCard = SMessage(type)
	
	return (
		<MessageCard>
			<p>{text}</p>
		</MessageCard>
	)
}