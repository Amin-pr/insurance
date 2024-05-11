import { Paper, styled } from "@mui/material";

const TextHolder = styled(Paper)(({ theme }) => {
	return {
		padding: "2rem ",
		margin: "2rem",
		backgroundColor: theme.palette.light.main,
		// height: "60%",
		display: "flex",
		flexDirection: "column",
		position: "relative",
		borderRadius: "3rem",
	};
});

export { TextHolder };
