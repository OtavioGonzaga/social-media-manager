import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

export default {
	component: Input,
	title: "Components/Forms/Input",
} as Meta;

export const Default: StoryObj = {
	args: {
		name: 'Lorem',
		text: 'Lorem ipsum dolor sit amet, consectetur',
		type: 'text',
		maxLength: 20,
		placeholder: 'Lorem ipsum dolor sit amet',
	}
}