import { Paper, styled } from "@mui/material";

const TextHolder = styled(Paper)(({ theme }) => {
	return {
		padding: "2rem ",
		margin: "1rem",
		backgroundColor: theme.palette.dark1.main,
		// height: "60%",
		display: "flex",
		flexDirection: "column",
		position: "relative",
		borderRadius: "3rem",
	};
});

export { TextHolder };
