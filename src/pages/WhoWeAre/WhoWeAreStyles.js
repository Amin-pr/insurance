import styled from "@emotion/styled";
import { Box } from "@mui/material";

const LeftBox = styled(Box)(({ theme }) => {
	return {
		backgroundColor: theme.palette.light.main,
		borderTopLeftRadius: "2rem",
		paddingTop: "2rem",
		height: "100%",
		width: "100%",
	};
});

const RightBox = styled(Box)(({ theme }) => {
	return {
		borderTopRightRadius: "2rem",
		paddingTop: "2rem",
		height: "100%",
		width: "100%",
		// backgroundColor: "red",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	};
});

const Image = styled(Box)(({ theme }) => {
	return {
		objectFit: "fill",
		width: "120%",
		translate: "-20% 0",
		borderRadius: "2rem",
	};
});

export { LeftBox, RightBox, Image };
