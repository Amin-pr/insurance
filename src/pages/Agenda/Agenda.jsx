import { Fab, Slide, Typography } from "@mui/material";
import {
	AgendaCard,
	AgendaImage,
	ContainerFull,
	GridContainer,
	GridItem,
	RightBox,
} from "./AgendaStyles";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

const pages = [
	{ name: "Company overview" },
	{ name: "Who We Are" },
	{ name: "Our Uniqe Values" },
	{ name: "Products & Services" },
	{ name: "Customer Reviews" },
	{ name: "Pricing & Discounts" },
	{ name: "Cost Comparition" },
	{ name: "Summery Of Offering" },
];

function Agenda() {
	return (
		<div style={{ overflow: "hidden" }}>
			<Slide
				in
				direction="left"
				timeout={800}
			>
				<ContainerFull>
					<AgendaImage
						component={"img"}
						src="src/assets/images/Agenda/Agenda-bg.jpg"
					/>
					<RightBox>
						<GridContainer container>
							{pages.map((page, index) => {
								return (
									<GridItem
										key={index}
										item="true"
										// xs={5}
									>
										<AgendaCard variant="outlined">
											<Typography
												variant="body1"
												color={"white"}
											>
												{page.name}
											</Typography>
											<Link to={`/${page.name}`}>
												<Fab
													size="small"
													color="light"
												>
													<ArrowForwardIosRounded
														color="white"
														sx={{ ":hover": { color: "black" } }}
													/>
												</Fab>
											</Link>
										</AgendaCard>
									</GridItem>
								);
							})}
						</GridContainer>
					</RightBox>
				</ContainerFull>
			</Slide>
		</div>
	);
}

export default Agenda;
