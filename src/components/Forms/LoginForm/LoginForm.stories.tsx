import { Meta } from "@storybook/react";
import LoginForm from "./LoginForm";
import { BrowserRouter as Router } from "react-router-dom";

export default {
	component: LoginForm,
	title: "Components/Forms/LoginForm"
} as Meta;

export const Default = () => {
	return (
		<>
			<Router>
				<LoginForm HandleSubmit={() => {}} HandleChange={() => {}} Warnings={{email: '', password: ''}} />
			</Router>
		</>
	)
}