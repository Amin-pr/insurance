import {
	Box,
	Button,
	FormControl,
	FormGroup,
	TextField,
	Typography,
	Zoom,
	styled,
} from "@mui/material";
import { useState } from "react";
import { SignUp } from "../utility/Auth/ApiAuth";
import { useLogin } from "../utility/Auth/useLogin";
import { useQuery } from "@tanstack/react-query";
import { GetLoggedUserInfo } from "../utility/Auth/GetLoggedUserInfo";

const SubmitButton = styled(Button)(() => {
	return {
		height: "50px",
		width: "100%",
		// borderBottomRightRadius: "2rem",
		alignSelf: "end",
		justifySelf: "end",
		color: "white",
	};
});

function LoginForm() {
	const [inputEmail, setInputEmail] = useState("");
	const [inputPassword, setInputPassword] = useState("");
	const [userInfo, setUserInfo] = useState();

	// from query
	const { login, isLoading } = useLogin(setUserInfo);

	function handleSubmit(e) {
		console.log(inputEmail, inputPassword);
		e.preventDefault();
		if (!inputEmail || !inputPassword) return;
		login({ email: inputEmail, password: inputPassword });
	}

	// get logged in user data
	const { data: userData } = useQuery({
		queryKey: ["user"],
		// must return a promise
		queryFn: () => GetLoggedUserInfo(),
		staleTime: 60 * 1000 * 3,
	});

	return (
		<Zoom
			in
			timeout={500}
		>
			<Box
				// bgcolor={"red"}
				width={"100%"}
				display={"flex"}
				flexDirection={"column"}
			>
				<Typography variant="body"></Typography>
				<FormControl>
					<FormGroup>
						<TextField
							// sx={{ margin: " 1rem" }}
							variant="filled"
							size="small"
							id="name-input"
							label="Email"
							margin="normal"
							value={inputEmail}
							onChange={(e) => setInputEmail(e.target.value)}
						/>

						<TextField
							sx={{ marginBottom: " 2rem" }}
							margin="normal"
							variant="filled"
							size="small"
							label="Password"
							value={inputPassword}
							onChange={(e) => setInputPassword(e.target.value)}
						/>
						<SubmitButton
							variant="contained"
							color="dark1"
							type="submit"
							onClick={handleSubmit}
						>
							Submit
						</SubmitButton>
					</FormGroup>
				</FormControl>
			</Box>
		</Zoom>
	);
}

function SignupForm() {
	const [inputEmail, setInputEmail] = useState("");
	const [inputPassword, setInputPassword] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		if (!inputEmail || !inputPassword) return;

		SignUp({ email: inputEmail, password: inputPassword });
		console.log({ inputEmail, inputPassword });
	}

	return (
		<Zoom
			in
			timeout={500}
		>
			<Box
				width={"100%"}
				display={"flex"}
				flexDirection={"column"}
			>
				<FormControl>
					<FormGroup>
						<TextField
							margin="normal"
							variant="filled"
							size="small"
							label="Email"
							value={inputEmail}
							onChange={(e) => setInputEmail(e.target.value)}
						/>
						<TextField
							sx={{ marginBottom: " 2rem" }}
							margin="normal"
							variant="filled"
							size="small"
							label="Password"
							value={inputPassword}
							onChange={(e) => setInputPassword(e.target.value)}
						/>
						<SubmitButton
							variant="contained"
							color="dark1"
							type="submit"
							onClick={handleSubmit}
						>
							Submit
						</SubmitButton>
					</FormGroup>
				</FormControl>
			</Box>
		</Zoom>
	);
}
export { LoginForm, SignupForm };
