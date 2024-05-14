import styled from "@emotion/styled";
import { Box } from "@mui/material";

const BackgroundImage = styled(Box)({
	zIndex: "-2",
	width: "100%",
	height: "100svh",
	margin: "0",
	borderRadius: "0 !important",
	backgroundImage: "url('.//assets/images/AppLayout/AppLayoutImage.png')",
	backgroundSize: "cover",
	backgroundPosition: "center",
});

const ContentsHolder = styled(Box)({
	width: "84%",
	height: "95%",
	borderTopRightRadius: "3rem",
	borderTopLeftRadius: "3rem",
	margin: "auto",
	marginBottom: "0",
	padding: "0",
	backgroundColor: "white",
});
const Container = styled(Box)({
	backdropFilter: "blur(20px)",
	width: "100%",
	height: "100%",
	top: "0",
	left: "0",
	position: "absolute",
	display: "flex",
	flexDirection: "row",
	flexWrap: "nowrap",
	background:
		"linear-gradient(0deg, rgba(24,87,91,0.8) 0%, rgba(24,87,91,0.8) 100%)",
});

export { ContentsHolder, BackgroundImage, Container };
