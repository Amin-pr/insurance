import { Box, Fab, Typography } from "@mui/material";
// import "./GettStarted.css";
import Logo from "../../ui/Logo";
import {
	DateText,
	LeftBox,
	RightBox,
	ContainerFull,
	BannerText,
	LowerRightBox,
} from "./GettStartedStyles";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

function GettStarted() {
	return (
		<ContainerFull>
			<LeftBox>
				<Logo />
				<Box>
					<DateText>june 20,2023</DateText>

					<BannerText>Employee Health Benefits Consulting Services</BannerText>
				</Box>
			</LeftBox>
			<RightBox>
				<Link to={"/Home"}>
					<LowerRightBox>
						<Typography
							variant="h6"
							noWrap
							fontWeight={"bold"}
							color={"dark1.main"}
							boxShadow={"none"}
						>
							Get Started
						</Typography>
						<Fab
							variant="contained"
							color="dark1"
							sx={{
								":hover": {
									backgroundColor: "dark2.main",
									color: "white",
								},
							}}
							size="medium"
						>
							<ArrowForwardIosOutlined
								fontSize="medium"
								htmlColor="white"
							></ArrowForwardIosOutlined>
						</Fab>
					</LowerRightBox>
				</Link>
			</RightBox>
		</ContainerFull>
	);
}

export default GettStarted;
