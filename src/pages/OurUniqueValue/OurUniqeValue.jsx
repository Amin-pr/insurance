import {
	Box,
	Card,
	CardMedia,
	Fade,
	Grid,
	Grow,
	Slide,
	Typography,
} from "@mui/material";
import {
	GridContainer,
	HeaderText,
	LeftBox,
	RightBox,
	RightBoxContent,
	TextHolder,
} from "./OurUniqueValueStyles";
import ToggleHeaderButton from "../../ui/ToggleHeaderButton";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

function OurUniqeValue() {
	const [alignment, setAlignment] = useState("left");
	const [fadeIn, SetFadeIn] = useState(alignment);

	const handleAlignment = (event, newAlignment) => {
		if (newAlignment === alignment) {
			return setTimeout(() => {
				setAlignment(newAlignment);
			}, 300);
		}
		SetFadeIn(newAlignment);
		setTimeout(() => {
			setAlignment(newAlignment);
		}, 300);
	};
	const textes = {
		MissionDriven: {
			alignment: "left",
			title: "Mission Driven",
			text: "Our mission is to be a trusted partner for employers, offering innovative health insurance solutions that meet the evolving needs of their employees. We strive to provide reliable and cost-effective coverage, enabling individuals and their families to access quality healthcare services while maintaining security.",
		},
		LongTermRelationships: {
			alignment: "center",
			title: "Long-Term Relationship",
			text: "We pride ourselves on delivering exceptional customer service. Our dedicated customer support team is available to address inquiries, provide guidance on plan selection, and assist with claim processing. We strive to ensure a smooth and personalized experience for both employers and employees throughout their health insurance journey.",
		},
		DataDriven: {
			alignment: "right",
			title: "Data Driven",
			text: "We leverage advanced technology and digital solutions to enhance the member experience and streamline administrative processes. Our online portals and mobile apps provide members with easy access to plan information, claims tracking, provider directories, and virtual care options. We prioritize data security and adhere to industry standards to safeguard sensitive information.",
		},
	};
	// selects the chosen obj
	const selected =
		textes[
			Object?.keys(textes)?.find(
				(item) => textes[item]?.alignment === alignment
			)
		];
	return (
		<Grow
			in
			timeout={500}
		>
			<GridContainer
				container
				sx={
					{
						// justifyContent: "space-around",
						// alignItems: "center",
					}
				}
			>
				{/* <Slide
					in
					timeout={500}
				> */}
				<LeftBox
					item
					xs={12}
					md={6}
				>
					<HeaderText color={"dark1.main"}>Our Unique Value</HeaderText>
					<Card sx={{ height: "100%" }}>
						<CardMedia
							sx={{
								// width: "100%",
								height: "100%",
								backgroundSize: "cover",
								backgroundPosition: "left",
							}}
							// onClick={(e) => e.play}
							src=".\\assets\Images\CompanyOverview\3.png"
							component={"img"}
							// autoPlay
						></CardMedia>
					</Card>
				</LeftBox>
				{/* </Slide> */}
				<RightBox
					item
					xs={12}
					md={6}
				>
					<RightBoxContent>
						<ToggleHeaderButton
							alignment={alignment}
							handleAlignment={handleAlignment}
						/>
						<TextHolder>
							<Fade
								timeout={500}
								in={fadeIn === alignment}
							>
								<Box
									height={"100%"}
									overflow={"auto"}
									// sx={{scrollbar}}
								>
									<PerfectScrollbar>
										<Box>
											<Typography
												variant="h4"
												fontWeight={"bold"}
												// marginTop={"4rem"}
												marginBottom={"2rem"}
												textAlign="left"
												color="dark1.main"
												letterSpacing={"-2px"}
												padding={"1rem 0 0 0"}
											>
												{selected?.title}
											</Typography>
										</Box>
										<Box
											sx={{
												boxSizing: "border-box",
												height: "100%",
												// overflow: "auto",
											}}
										>
											<Typography
												variant="body1"
												color="dark1.main"
												fontWeight={"medium"}
												padding={"0 2rem"}
											>
												{selected?.text}
											</Typography>
										</Box>
									</PerfectScrollbar>
								</Box>
							</Fade>
						</TextHolder>
					</RightBoxContent>
				</RightBox>
			</GridContainer>
		</Grow>
	);
}

export default OurUniqeValue;
