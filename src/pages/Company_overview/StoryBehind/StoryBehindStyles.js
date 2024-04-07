import styled from "@emotion/styled";
import { Box } from "@mui/material";

const Holder = styled(Box)(({ theme }) => {
	return {
		padding: "2rem ",
		margin: "1rem",
		backgroundColor: theme.palette.light.main,
		// height: "60%",
		display: "flex",
		flexDirection: "column",
		position: "relative",
		borderRadius: "1rem",
	};
});

export { Holder };
