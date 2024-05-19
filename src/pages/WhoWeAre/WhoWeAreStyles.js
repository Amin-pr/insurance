import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const LeftBox = styled(Box)(({ theme }) => {
	return {
		boxSizing: "border-box",
		backgroundColor: theme.palette.light.main,
		borderTopLeftRadius: "2rem",
		paddingTop: "2rem",
		height: "100%",
		width: "100%",
		[theme.breakpoints.down("md")]: {
			height: "100%",
			width: "auto",
			borderRadius: "2rem",
			borderTopRightRadius: "0",
		},
	};
});

const RightBox = styled(Box)(({ theme }) => {
	return {
		borderTopRightRadius: "2rem",
		paddingTop: "2rem",
		height: "100%",
		width: "100%",
		// backgroundColor: "whitesmoke",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		[theme.breakpoints.down("md")]: {
			height: "auto",
			width: "auto",
		},
	};
});

const Image = styled(Box)(({ theme }) => {
	return {
		objectFit: "fill",
		width: "120%",
		translate: "-20% 0",
		borderRadius: "2rem",
		[theme.breakpoints.down("md")]: {
			width: "100%",
			translate: "0",
			borderRadius: "0",
		},
	};
});
const LeftGridItem = styled(Box)(({ theme }) => {
	return {
		[theme.breakpoints.down("md")]: {
			height: "auto",
			width: "auto",
		},
	};
});
const RightGridItem = styled(Box)(({ theme }) => {
	return {
		[theme.breakpoints.down("md")]: {},
	};
});

const HeaderText = styled(Typography)(({ theme }) => {
	return {
		fontWeight: "bold",
		fontSize: "clamp(3rem, 10vw,7rem)",
		lineHeight: "4rem",
		marginBottom: "2rem",
		color: "teal",
		[theme.breakpoints.down("md")]: {
			lineHeight: "2.5rem",
		},
	};
});
const ButtonHolder = styled(Box)(({ theme }) => {
	return {
		display: "flex",
		alignItems: "center",
		padding: "1rem",
		marginTop: "2.5rem",
		marginRight: "2rem",
		[theme.breakpoints.down("md")]: {
			marginTop: "0.5rem",
			marginRight: "0",
		},
	};
});

export {
	LeftBox,
	RightBox,
	Image,
	LeftGridItem,
	RightGridItem,
	HeaderText,
	ButtonHolder,
};
