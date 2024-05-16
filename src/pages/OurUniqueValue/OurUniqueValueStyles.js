// import styled from "@emotion/styled";
import { Height } from "@mui/icons-material";
import { Box, CardMedia, Grid, Typography, styled } from "@mui/material";
// const theme=createTheme()
const GridContainer = styled(Grid)(({ theme }) => {
	return {
		width: "100%",
		height: "100%",
		alignItems: "stretch",
		justifyContent: "space-around",
		gap: "-1rem",
		[theme.breakpoints.down("md")]: {
			alignItems: "center",
			justifyContent: "space-around",
		},
	};
});

const LeftBox = styled(Grid)(({ theme }) => {
	return {
		width: "100%",
		// height: "calc(100% +1rem)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		padding: "2rem",
		// backgroundColor: "red",
		textWrap: "",
		[theme.breakpoints.down("md")]: {
			height: "35%",
			flexDirection: "row",
			padding: "0",
		},
	};
});
const RightBox = styled(Grid)(() => {
	return {
		boxSizing: "border-box",
		width: "100%",
		// height: "calc(100% )",
		display: "flex",
		paddingTop: "4rem",
		alignItems: "end",
		// backgroundColor: "green",
		// overflow: "auto",
	};
});
const RightBoxContent = styled(Box)(({ theme }) => {
	return {
		position: "relative",
		width: "100%",
		height: "100%",
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
		// fontSize: "4rem",
		backgroundColor: theme.palette.dark1.main,
		[theme.breakpoints.down("md")]: { width: "50px" },
	};
});

const TextHolder = styled(Box)(() => {
	return {
		scrollPaddingInline: "2rem",
		padding: "2rem 0 2rem 2rem",
		height: "100%",
	};
});

const Video = styled(CardMedia)(() => {
	return {
		width: "250px",
		height: "250px",
	};
});
const HeaderText = styled(Typography)(({ theme }) => ({
	fontWeight: "bold",
	textAlign: "left",
	letterSpacing: "-2px",
	padding: "1rem",
	width: "3rem",
	fontSize: "clamp(1.25rem,4vw,4rem)",
	// color: "blue",
	// backgroundColor: "yellow",
	[theme.breakpoints.down("md")]: { width: "20%", paddingTop: "2rem" },
}));

export {
	LeftBox,
	RightBox,
	RightBoxContent,
	RightBoxHeader,
	TextHolder,
	Video,
	HeaderText,
	GridContainer,
};
