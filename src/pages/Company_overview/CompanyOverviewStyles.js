import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";

const GridItem = styled(Grid)({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	padding: "2rem",
});
const CompanyText = styled(Typography)(({ theme }) => ({
	textAlign: "center",
	variant: "h2",
	color: theme.palette.dark2.main,
	fontWeight: "medium",
	lineHeight: "4rem",
	fontSize: "5rem",
	letterSpacing: "-1px",
	textWrap: "wrap",
}));
const Holder = styled(Box)(({ theme }) => ({
	height: "100%",
	[theme.breakpoints.down("md")]: {},
}));

const GridContainer = styled(Box)({
	direction: "row",
	column: 2,
	alignContent: "center",
	justifyContent: "space-around",
	height: "100%",
});
export { GridContainer, GridItem, CompanyText, Holder };
