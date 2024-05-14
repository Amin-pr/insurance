/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Box, Fab, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ButtonHolder({
	next,
	prev,
	buttonBackground = "transparent",
	text,
	buttonSize,
	buttonBorderColor = "#FFFFFF",
	to,
}) {
	const ButtonHolder = styled(Box)(({ theme }) => ({
		width: "10%",
		height: "100vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		margin: "0 1rem",
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	}));
	const NavigateButton = styled(Fab)({
		backgroundColor: `${buttonBackground}`,
		border: "2px solid white",
		marginTop: "10px",
	});
	return (
		<ButtonHolder>
			<Typography
				variant="body1"
				color={`${buttonBorderColor}`}
			>
				{text}
			</Typography>
			<Link to={to}>
				<NavigateButton size={`${buttonSize}`}>
					{prev === true && (
						<ArrowBackIosNew htmlColor={`${buttonBorderColor}`} />
					)}
					{next === true && (
						<ArrowForwardIos htmlColor={`${buttonBorderColor}`} />
					)}
				</NavigateButton>
			</Link>
		</ButtonHolder>
	);
}

export default ButtonHolder;
