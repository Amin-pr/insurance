import styled from "@emotion/styled";
import { Box, ToggleButton } from "@mui/material";

const ChildrenHolder = styled(Box)(({ theme }) => {
	return {
		boxSizing: "border-box",
		width: "100%",
		height: "100%",
		borderTopRightRadius: "2.9rem",
		position: "absolute",
		top: "0",
		left: "0",
		backgroundColor: theme.palette.dark1.main,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "start",
	};
});
const HeadImage = styled(Box)(() => {
	return {
		// width: "100%",
	};
});
const TextBox = styled(Box)(({ theme }) => {
	return {
		height: "calc(100% - 5rem)",
		width: "100%",
		backgroundColor: theme.palette.light.main,
		[theme.breakpoints.down("md")]: {
			// overflow: "auto",
		},
	};
});

const Benifitsnumbers = styled(Box)(() => {
	return {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		boxSizing: "border-box",
		padding: "1rem",
		width: "100%",
	};
});
const BenifitsToggleNumbers = styled(ToggleButton)(({ theme }) => {
	return {
		"&.Mui-selected": {
			backgroundColor: theme.palette.dark1.main,
			color: "white",
		},
		backgroundColor: theme.palette.dark1,
		marginRight: "1rem",
		aspectRatio: "3/1",
		borderRadius: "2rem",
		padding: "5px 40px",
	};
});
const Benifit = styled(Box)(() => {
	return {
		boxsixteen: "border-box",
		scrollbarWidth: "0",
		width: "100%",
		height: "calc(100% - 3rem)",
		position: "relative",
	};
});

const BenifitItem = styled(Box)(() => {
	return {
		boxSizing: "border-box",
		position: "absolute",
		top: "0",
		left: "0",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		padding: "2rem 2rem 5rem 2rem",
		gap: "1rem",
	};
});

export {
	ChildrenHolder,
	HeadImage,
	TextBox,
	Benifitsnumbers,
	Benifit,
	BenifitItem,
	BenifitsToggleNumbers,
};
