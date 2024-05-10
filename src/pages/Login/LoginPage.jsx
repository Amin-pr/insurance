import { Box, Paper, Slide, ToggleButton } from "@mui/material";
import {
	ButtonHolder,
	InputHolder,
	LeftBox,
	RightBox,
	RightBoxImage,
	RightBoxImageHolder,
	Text,
	TextHolder,
	TypeHolder,
} from "./LoginStyles";
import { useState } from "react";
import { LoginForm, SignupForm } from "../../ui/Login&Signup";
import PerfectScrollbar from "react-perfect-scrollbar";

function LoginPage() {
	const [error, setError] = useState(false);

	const [formType, setFormType] = useState("signUp");

	return (
		<>
			<Box
				display={"flex"}
				width={"100%"}
				height={"100%"}
			>
				<LeftBox>
					<TextHolder>
						<Text
							variant="h3"
							dir="rtl"
							fontWeight={"700"}
						>
							&nbsp;&nbsp;&nbsp; Welcom to
							<br />
							Insura
						</Text>
					</TextHolder>
					<TypeHolder>
						<ButtonHolder
							value={formType}
							fullWidth
						>
							<ToggleButton
								value={"login"}
								onClick={() => setFormType("login")}
								color={"dark1"}
							>
								Login
							</ToggleButton>

							<ToggleButton
								color={"dark1"}
								value={"signUp"}
								onClick={() => setFormType("signUp")}
							>
								Sign Up
							</ToggleButton>
						</ButtonHolder>
					</TypeHolder>
					<PerfectScrollbar>
						<Paper
							sx={{
								margin: "0 4rem",
								borderRadius: "2rem",
							}}
						>
							<InputHolder>
								{formType === "signUp" ? <SignupForm /> : <LoginForm />}
							</InputHolder>
						</Paper>
					</PerfectScrollbar>
				</LeftBox>

				<RightBox>
					<Slide
						in
						direction="up"
						timeout={800}
					>
						<RightBoxImageHolder>
							<RightBoxImage
								component={"img"}
								image="public/assets/images/Login/1.jpg"
							/>
						</RightBoxImageHolder>
					</Slide>
				</RightBox>
			</Box>
		</>
	);
}
export default LoginPage;
