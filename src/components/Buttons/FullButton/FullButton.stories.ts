import { Meta, StoryObj } from "@storybook/react"
import FullButton from "./FullButton";

// eslint-disable-next-line
export default {
	title: 'Components/Buttons/FullButton',
	component: FullButton
} as Meta

export const Default: StoryObj = {
	args: {
		text: 'Full Button'
	}
};