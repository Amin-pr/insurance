import styled from "@emotion/styled";
import { Box } from "@mui/material";

const LeftBox = styled(Box)(({ theme }) => {
	return {
		backgroundColor: theme.palette.light.main,
		borderTopLeftRadius: "2rem",
		paddingTop: "2rem",
		height: "100%",
		width: "100%",
		[theme.breakpoints.down("md")]: {
			height: "auto",
			width: "auto",
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

export { LeftBox, RightBox, Image, LeftGridItem, RightGridItem };
