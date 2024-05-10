import { Box, Grid, Slide, Typography, Zoom } from "@mui/material";
import { Image, LeftBox, RightBox } from "./WhoWeAreStyles";
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
					width={"100%"}
					height={"100%"}
					xs={6}
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
								<Typography
									variant="h2"
									fontWeight={"medium"}
									fontSize={"85px"}
									lineHeight={"4rem"}
									marginBottom={"3rem"}
									color={"teal"}
								>
									Who
									<br />
									we are
								</Typography>
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
					width={"100%"}
					height={"100%"}
					xs={6}
				>
					<RightBox>
						<Slide
							in
							direction="left"
							timeout={500}
						>
							<Image
								component={"img"}
								src="public/assets/images/AppLayout/AppLayoutImage.png"
							/>
						</Slide>
						<Box
							// bgcolor={"yellow"}
							display="flex"
							width={"100%"}
							justifyContent={"end"}
						>
							<Box
								display={"flex"}
								alignItems={"center"}
								// bgcolor={"blue"}
								marginTop={"15%"}
								marginRight={"12%"}
								padding={"1rem"}
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
							</Box>
						</Box>
					</RightBox>
				</Grid>
			</Grid>
		</Zoom>
	);
}

export default WhoWeAre;
