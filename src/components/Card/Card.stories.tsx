import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

export default {
	title: "Components/Card",
	component: Card
} as Meta;

export const Default: StoryObj = {
	args: {
		children: (
			<>
				<h2>Lorem ipsum dolor sit amet consectetur.</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam odit excepturi numquam dolores, ipsum velit sint hic illum nulla accusantium et obcaecati saepe ducimus debitis ratione, quo, voluptatibus alias.</p>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ea obcaecati repudiandae corporis repellat itaque, aperiam maxime numquam eligendi dicta ullam! Esse adipisci harum enim ut nihil voluptas omnis exercitationem?</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eos esse molestias quidem odio voluptatibus voluptates ab architecto, obcaecati dignissimos cum at deleniti alias. Voluptas fugit mollitia esse aspernatur odit.</p>
			</>
		)
	}
}