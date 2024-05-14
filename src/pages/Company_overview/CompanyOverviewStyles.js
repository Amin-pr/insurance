import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";

const LeftGridItem = styled(Grid)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	height: "100%",
	[theme.breakpoints.down("md")]: {
		height: "30%",
		position: "static",
		flexGrow: "1",
		pading: "2rem",
		alignItems: "end",
	},
}));
const RightGridItem = styled(Grid)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	paddingTop: " 5rem",
	flexDirection: "column",
	height: "100% ",
	overflow: "auto",
	top: "0",
	right: "0",
	overflowY: "auto",
	position: "absolute",

	[theme.breakpoints.down("md")]: {
		position: "static",
		flexGrow: "2	",
		height: "95%",
		paddingTop: " 2rem",
	},
}));
const CompanyText = styled(Typography)(({ theme }) => ({
	textAlign: "center",
	variant: "h2",
	color: theme.palette.dark2.main,
	fontWeight: "medium",
	lineHeight: "4rem",
	fontSize: "4.5rem",
	letterSpacing: "-3px",
	textWrap: "wrap",
	[theme.breakpoints.down("md")]: {
		fontSize: "3rem",
	},
}));
const Holder = styled(Box)(({ theme }) => ({

	height: "100%",
	[theme.breakpoints.down("md")]: {},
}));

const GridContainer = styled(Box)(({ theme }) => ({
	alignContent: "center",
	justifyContent: "space-around",
	height: "100%",
	[theme.breakpoints.down("md")]: {
		// flexDirection: "column",
	},
}));
export { GridContainer, LeftGridItem, RightGridItem, CompanyText, Holder };
