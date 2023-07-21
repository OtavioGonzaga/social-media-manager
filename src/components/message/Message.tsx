import { useEffect, useState } from 'react'
import SMessage  from './MessageStyle'
import { FaTimes } from 'react-icons/fa'
interface props {
	text: string
	type: string
}

export default function Message({ text, type }: props) {
	const MessageCard = SMessage(type)
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		if (text) {
			setVisible(true)
			setTimeout(() => {
				setVisible(false)
			}, type === 'success'? 5000: 20000)
		}
	}, [text, type])

	return (
		<>
		{visible && (
			<MessageCard>
				<p>{text}</p>
				<button onClick={() => setVisible(false)}><FaTimes /></button>
			</MessageCard>
		)}
		</>
	)
}