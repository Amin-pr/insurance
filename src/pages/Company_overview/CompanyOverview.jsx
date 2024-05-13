import { useRef } from "react";
import { Box, Grid, Grow, Paper } from "@mui/material";
import { CompanyText, GridItem, Holder } from "./CompanyOverviewStyles";
import StoryBehind from "./StoryBehind/StoryBehind";
import StartingText from "./StartingText/StartingText";
import Gallery from "./Gallery/Gallery";
import useScrollFunction from "../../utility/ScrollFunction/ScrollFunction";

function CompanyOverView() {
	const scrollableRef = useRef(null);
	const { scrollAmount, handleScroll } = useScrollFunction({
		maxScrollAmount: 2,
	});
	return (
		<Holder
			ref={scrollableRef}
			onWheel={(e) => handleScroll(e)}
		>
			<Grow
				in
				timeout={800}
			>
				<Grid
					direction={"row"}
					container
					column={2}
					alignContent={"center"}
					justifyContent={"space-between"}
					height={"100%"}
					bgcolor={'red'}
				>
					<GridItem
						item
						xs={scrollAmount === 2 ? 12 : 6}
						overflow={"hidden"}
						alignItems="center"
						justifyContent={"center"}
						bgcolor={'yellow'}
					>
						<Box
							color="dark1"
							sx={{ bgcolor: "dark1" }}
						>
							<CompanyText>Company Overview</CompanyText>
						</Box>
					</GridItem>
					<GridItem
						item
							// width={"100%"}
						position={"relative"}
						minHeight={"20rem"}
						height={`${scrollAmount === 2 ? 80 : 100}%`}
						// bgcolor={"red"}
						flexGrow={2}
					>
						<Box
							position={"absolute"}
							height={"100%"}
							top={0}
							left={0}
						>
							<StartingText scrollAmount={scrollAmount} />
						</Box>
						<Box
							marginRight={"1rem"}
							position={"absolute"}
							top={0}
							left={0}
							height={"100%"}
							// bgcolor={"red"}
							boxSizing={"border-box"}
							paddingBottom={"1rem"}
						>
							<StoryBehind scrollAmount={scrollAmount} />
						</Box>
						<Box
							position={"absolute"}
							top={0}
							left={0}
							// right={0}
							width={"100%"}
							height={"100%"}
						>
							<Gallery scrollAmount={scrollAmount} />
						</Box>
					</GridItem>
				</Grid>
			</Grow>
		</Holder>
	);
}

export default CompanyOverView;
