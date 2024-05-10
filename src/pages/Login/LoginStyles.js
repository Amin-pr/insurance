import {
	Box,
	CardMedia,
	ToggleButtonGroup,
	Typography,
	styled,
} from "@mui/material";

const LeftBox = styled(Box)(() => {
	return {
		width: "100%",
		height: "calc(100% - 5rem)",
		// marginTop: "2rem",
		// backgroundColor: "red",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "3rem",
	};
});

const ButtonHolder = styled(ToggleButtonGroup)(({ theme }) => {
	return {
		width: "100%",

		borderRadius: "10px",
		padding: "5px",
		color: theme.palette.dark1.main,
		// margin: "0rem 0rem 2rem 2rem",
	};
});

const TypeHolder = styled(Box)(() => {
	return {
		display: "flex",
		alignItems: "center",
		justifyContent: "start",
	};
});

const RightBox = styled(Box)(({ theme }) => {
	return { width: "100%", height: "100%" };
});

const RightBoxImage = styled(CardMedia)(() => {
	return {
		width: "100%",
		height: "90%",
		borderTopLeftRadius: "3rem",
		zIndex: "1",
		position: "absolute",
		bottom: "0",
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

const InputHolder = styled(Box)(() => {
	return {
		display: "flex",
		flexDirection: "column",
		alignItems: "start",
		justifyContent: "center",
		rowGap: "3rem",
	};
});
const Text = styled(Typography)(({ theme }) => {
	return {
		color: theme.palette.dark1.main,
		margin: "2rem",
	};
});
const TextHolder = styled(Box)(() => {
	return {
		display: "flex",
	};
});

export {
	LeftBox,
	RightBox,
	RightBoxImage,
	RightBoxImageHolder,
	ButtonHolder,
	TypeHolder,
	InputHolder,
	Text,
	TextHolder,
};
