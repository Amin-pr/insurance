import { Box, Grid, Slide, Typography, Zoom } from "@mui/material";
import { ButtonHolder, HeaderText, Image, LeftBox, RightBox } from "./WhoWeAreStyles";
import ButtonNav from "../../ui/NavButton";

function WhoWeAre() {
	return (
		<Zoom in>
			<Grid
				container
				column={2}
				direction={"row"}
				height={"100%"}
			>
				<Grid
					item
					xs={12}
					md={6}
				>
					<LeftBox height={"100%"}>
						<Slide
							in
							direction="right"
							timeout={500}
						>
							<Box
								height={"75%"}
								display={"flex"}
								alignItems={"start"}
								justifyContent={"end"}
								flexDirection={"column"}
								padding={"2rem"}
							>
								{/* <Slide
								in
								direction="right"
							> */}
								<HeaderText
									variant="h2"
								>
									Who
									<br />
									we are
								</HeaderText>
								<Typography
									variant="body1"
									fontSize={"20px"}
									fontWeight={"medium"}
								>
									We are a leading provider of tailored health insurance
									solutions exclusively designed for employees.
								</Typography>
								{/* </Slide> */}
							</Box>
						</Slide>
					</LeftBox>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
				>
					<RightBox>
						<Slide
							in
							direction="left"
							timeout={500}
						>
							<Image
								component={"img"}
								src=".\\assets\Images\AppLayout\AppLayoutImage.png"
							/>
						</Slide>
						<Box
							// bgcolor={"yellow"}
							display="flex"
							width={"100%"}
							justifyContent={"end"}
						>
							<ButtonHolder
								// display={"flex"}
								// alignItems={"center"}
								// // bgcolor={"blue"}
								// // marginTop={"15%"}
								// // marginRight={"12%"}
								// padding={"1rem"}
							>
								<Typography
									marginRight={"1rem"}
									variant="body1"
								>
									Meet The Team
								</Typography>
								{/* <Fab
								size="medium"
								color={"dark1"}
								>
								<ArrowForwardIos color="white" />
							</Fab> */}
								<ButtonNav
									next
									arrowHoverColor="#082F32"
								></ButtonNav>
							</ButtonHolder>
						</Box>
					</RightBox>
				</Grid>
			</Grid>
		</Zoom>
	);
}

export default WhoWeAre;
