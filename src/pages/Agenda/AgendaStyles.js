import { Box, Card, styled } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const ContainerFull = styled(Box)({
	maxWidth: "100dvw !important",
	height: "100dvh",
	overflowX: "hidden",
	// overflowY: "scroll",
});

const AgendaImage = styled(Box)({
	backgroundImage: "src/assets/images/Agenda-bg.jpg",
	maxWidth: "calc(100vw )",
	height: "calc(100vh)",
	// aspectRatio: "16/8",
});
const RightBox = styled(Box)({
	width: "58%",
	height: "100vh",
	position: "absolute",
	display: "flex",
	flexDirection: "column",
	flexWrap: "wrap",
	top: "0",
	right: "0",
	background:
		"linear-gradient(0deg, rgba(24,87,91,0.8) 0%, rgba(24,87,91,0.8) 100%)",
	backdropFilter: "blur(5px)",
	alignItems: "center",
});

const AgendaCard = styled(Card)({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	marginTop: "1rem",
	flexDirection: "row",
	borderRadius: "1rem",
	border: "2px solid #DCECED",
	padding: "2rem",
	minWidth: "200px",
	flexWrap: "nowrap",
	background: "rgba(255,255,255,0.1)",
});
const GridItem = styled(Grid2)({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});
const GridContainer = styled(Grid2)({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	paddingTop: "2rem",
	flexWrap: "wrap",
	columnGap: "2rem",
});
export {
	ContainerFull,
	AgendaImage,
	AgendaCard,
	RightBox,
	GridItem,
	GridContainer,
};
