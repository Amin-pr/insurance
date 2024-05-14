import { useRef } from "react";
import { Box, Grid, Grow } from "@mui/material";
import {
	CompanyText,
	Holder,
	LeftGridItem,
	RightGridItem,
} from "./CompanyOverviewStyles";
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
					position={"relative"}
					container
					column={2}
					alignContent={"center"}
					height={"100%"}
				>
					<LeftGridItem
						item
						xs={12}
						md={4}
						overflow={"hidden"}
						alignItems="center"
						justifyContent={"center"}
					>
						<Box
							color="dark1"
							sx={{ bgcolor: "dark1" }}
						>
							<CompanyText>Company Overview</CompanyText>
						</Box>
					</LeftGridItem>
					<RightGridItem
						xs={12}
						md={8}
						item
						// position={"relative"}
						// minHeight={"20rem"}
						// height={`${scrollAmount === 2 ? 80 : 100}%`}
						flexGrow={1}
					>
						<Box z>
							<StartingText />
						</Box>
						<Box
							paddingBottom={"4rem"}
							overflow={"auto"}
						>
							<StoryBehind />
						</Box>
					</RightGridItem>
				</Grid>
			</Grow>
		</Holder>
	);
}

export default CompanyOverView;
