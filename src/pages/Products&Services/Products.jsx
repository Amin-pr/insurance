import { Box, Grow, Slide } from "@mui/material";
import {
	LeftBox,
	LeftBoxTitle,
	RightBox,
	RightBoxImage,
	RightBoxImageFilter,
	RightBoxImageHolder,
} from "./ProductsStyles";
import { useState } from "react";
import TogglingButton from "../../ui/ToggleButton";
import CorePoducts from "./CoreProducts/CorePoducts";
import ServicesBenifits from "./ServicesBenifits/ServicesBenifits";

function Products() {
	const [selectedCategory, setSelectedCategory] = useState("image");
	// const [showing, setShowing] = useState("benifits");
	function clickHandandler(e) {
		setSelectedCategory(e.target.value);
	}
	console.log(selectedCategory);
	return (
		<Grow in>
			<Box
				display={"flex"}
				flexDirection={"row"}
				width={"100%"}
				height={"100%"}
			>
				<LeftBox>
					<LeftBoxTitle
						variant="h2"
						fontWeight={"medium"}
						color={"dark1.main"}
					>
						Products
						<br />& services
					</LeftBoxTitle>
					<TogglingButton
						value={"products"}
						aria-label="core button"
						sx={{ margin: "1rem", width: "90%" }}
						handleClick={clickHandandler}
						selected={selectedCategory === "products"}
						setSelected={setSelectedCategory}
					>
						Core product & services
					</TogglingButton>
					<TogglingButton
						value={"benifits"}
						sx={{ width: "90%" }}
						aria-label="core button"
						handleClick={clickHandandler}
						selected={selectedCategory === "benifits"}
						setSelected={setSelectedCategory}
					>
						Key Benifits Of Services
					</TogglingButton>
				</LeftBox>
				<RightBox>
					<Slide
						direction="left"
						timeout={500}
						in={selectedCategory === "image"}
					>
						<RightBoxImageHolder>
							<RightBoxImageFilter />
							<RightBoxImage
								component={"img"}
								image="public/assets/images/ProductAndServices/family.png"
							/>
						</RightBoxImageHolder>
					</Slide>
					<CorePoducts showing={selectedCategory} />
					<ServicesBenifits showing={selectedCategory} />
				</RightBox>
			</Box>
		</Grow>
	);
}

export default Products;
