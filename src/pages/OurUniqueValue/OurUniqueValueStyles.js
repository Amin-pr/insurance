// import styled from "@emotion/styled";
import { Box, CardMedia, styled } from "@mui/material";
// const theme=createTheme()

const LeftBox = styled(Box)(() => {
	return {
		width: "100%",
		height: "calc(100% -4rem)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		padding: "2rem",
	};
});
const RightBox = styled(Box)(() => {
	return {
		width: "100%",
		height: "calc(100% -4rem)",
		display: "flex",
		paddingTop: "2rem",
		alignItems: "end",
	};
});
const RightBoxContent = styled(Box)(({ theme }) => {
	return {
		position: "relative",
		width: "100%",
		height: "90%",
		borderRadius: "1rem 1rem 0 0",
		margin: "auto",
		marginRight: "0",
		marginBottom: "0rem",
		backgroundColor: theme.palette.light.main,
	};
});
const RightBoxHeader = styled(Box)(({ theme }) => {
	return {
		position: "absolute",
		top: "0",
		right: "1rem",
		left: "3rem",
		margin: "auto",
		minHeight: "60px",
		translate: "0 -50%",
		borderRadius: "0.5rem",
		padding: "0.5rem",
		backgroundColor: theme.palette.dark1.main,
	};
});

const TextHolder = styled(Box)(() => {
	return { padding: "2rem" };
});

const Video = styled(CardMedia)(() => {
	return {
		width: "250px",
		height: "250px",
	};
});

export {
	LeftBox,
	RightBox,
	RightBoxContent,
	RightBoxHeader,
	TextHolder,
	Video,
};
