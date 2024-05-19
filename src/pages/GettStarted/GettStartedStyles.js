import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";

const ContainerFull = styled(Container)({
	maxWidth: "100dvh",
	height: "100dvh",
	overflow: "hidden",
});
const LeftBox = styled(Box)(({ theme }) => ({
	boxSizing: "border-box",
	margin: "0",
	paddingLeft: "4rem",
	paddingTop: "3rem",
	display: "flex",
	flexDirection: "column",
	gap: "3rem",
	position: "absolute",
	background: "#18575b",
	borderTopRightRadius: "10rem",
	width: "58%",
	overflow: "hidden",
	zIndex: "2",
	left: "0",
	top: "0",

	height: "calc(100dvh )",
	[theme.breakpoints.down("md")]: {
		paddingLeft: "2rem",
		paddingTop: "0.5rem",
		width: "calc(100% )",
		height: "calc(55% )",
		borderTopRightRadius: "0",
		borderBottomRightRadius: "5rem",
		gap: "0rem",
		// paddingLeft: "0rem",
		// paddingTop: "0rem",
	},
}));

const RightBox = styled(Box)(({ theme }) => ({
	position: "absolute",
	backgroundSize: "cover",
	width: "50%",
	backgroundImage: `url(.//assets/Images/GettingStarted/1.png)`,
	backgroundRepeat: "no-repeat",
	backgroundPosition: "right",
	right: "0",
	overflow: "hidden",
	// top: "0",
	height: "100%",
	[theme.breakpoints.down("md")]: {
		backgroundPosition: "center",
		bottom: "0",
		width: "100%",
		height: "58%",
	},
}));

const DateText = styled(Typography)({
	variant: "body1",
	color: "#8DACAE",
	fontWeight: "bold",
	fontSize: "20px",
	textShadow: "1px 1px 0 black",
	paddingLeft: "1rem",
});
const BannerText = styled(Typography)(({ theme }) => ({
	color: "#fff",
	fontWeight: "600",
	component: "h1",
	variant: "h2",
	maxWidth: "70%",
	fontSize: "clamp(4rem, 10vw, 6.5rem)",
	letterSpacing: "-0.3rem",
	lineHeight: "5rem",
	[theme.breakpoints.down("md")]: {
		maxWidth: "70%",
		// fontSize: "4rem",
		letterSpacing: "-0.3rem",
		lineHeight: "3.7rem",
	},
}));
const LowerRightBox = styled(Box)({
	borderTopLeftRadius: "3rem",
	backgroundColor: "#8DACAE",
	width: "14rem",
	height: "3rem",
	gap: "1.5rem",
	padding: "2rem",
	position: "absolute",
	bottom: "0",
	right: "0",
	display: "flex",
	alignItems: "center",
	justifyContent: "end",
});

export {
	ContainerFull,
	LowerRightBox,
	BannerText,
	LeftBox,
	DateText,
	RightBox,
};
