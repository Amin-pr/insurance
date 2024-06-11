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
	return {
		width: "100%",
		height: "100%",
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	};
});

const RightBoxImage = styled(CardMedia)(({ theme }) => {
	return {
		width: "100%",
		height: "90%",
		borderTopLeftRadius: "3rem",
		zIndex: "1",
		position: "absolute",
		bottom: "0",
		left: "0",

		[theme.breakpoints.down("md")]: {},
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
		padding: "2rem",
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
