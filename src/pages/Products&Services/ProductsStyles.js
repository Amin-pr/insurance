import styled from "@emotion/styled";
import { Box, CardMedia, Typography } from "@mui/material";

const LeftBox = styled(Box)(() => {
	return {
		width: "60%",
		height: "100%",
		// backgroundColor: "red",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		flexGrow: "0.5",
	};
});
const RightBox = styled(Box)(() => {
	return {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		flexGrow: "1",
		position: "relative",
	};
});

const LeftBoxTitle = styled(Typography)(() => {
	return {
		padding: "2rem",
	};
});
const RightBoxImage = styled(CardMedia)(() => {
	return {
		width: "100%",
		height: "100%",
		borderTopRightRadius: "3rem",
		zIndex: "1",
		position: "absolute",
		top: "0",
		left: "0",
	};
});
const RightBoxImageHolder = styled(Box)(() => {
	return {
		height: "100%",
		width: "100%",
		position: "relative",
	};
});

const RightBoxImageFilter = styled(Box)(() => {
	return {
		width: "100%",
		height: "100%",
		borderTopRightRadius: "3rem",
		backgroundColor: "#FF1B96",
		zIndex: "2",
		position: "absolute",
		top: "0",
		left: "0",
		opacity: "0.2",
	};
});

const ChildrenHolder = styled(Box)(({ theme }) => {
	return {
		boxSizing: "border-box",
		width: "100%",
		height: "100%",
		borderTopRightRadius: "2.9rem",
		position: "absolute",
		top: "0",
		left: "0",
		overflow: "auto",
		backgroundColor: theme.palette.dark1.main,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "start",
		gap: "2rem",
		paddingTop: "3rem",
		// scrollbarColor: `${theme.palette.dark1.main}  ${theme.palette.dark2.main}`,
	};
});
const ChildeBox = styled(Box)(({ theme }) => {
	return {
		padding: "2rem",
		width: "50%",
		height: "85%",
		borderRadius: "1rem",
		backgroundColor: theme.palette.light.main,
	};
});

export {
	LeftBox,
	RightBox,
	LeftBoxTitle,
	RightBoxImage,
	RightBoxImageHolder,
	RightBoxImageFilter,
	ChildrenHolder,
	ChildeBox,
};
