/* eslint-disable react/prop-types */
import Carousel from "react-material-ui-carousel";
import { Box, Paper, Slide } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

function Gallery({ scrollAmount }) {
	var items = [
		{ src: "public/assets/images/CompanyOverview/1.png" },
		{ src: "public/assets/images/CompanyOverview/2.png" },
		{ src: "public/assets/images/CompanyOverview/3.png" },
	];

	return (
		<Slide in={scrollAmount === 2}>
			<Box
				// padding={"2rem"}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
			>
				<Box width={"90%"}>
					<Carousel
						// height={"300px"}
						indicators={false}
						sx={{ visibility: scrollAmount === 2 ? "visible" : "hidden" }}
						PrevIcon={<ArrowBackIosNew />}
						NextIcon={<ArrowForwardIos />}
					>
						{items.map((item, i) => (
							<Item
								key={i}
								item={item}
							/>
						))}
					</Carousel>
				</Box>
			</Box>
		</Slide>
	);
}

function Item(props) {
	return (
		<Paper>
			<img
				src={`${props.item.src}`}
				height={"400px"}
				style={{ objectFit: "strech" }}
			/>
		</Paper>
	);
}

export default Gallery;
