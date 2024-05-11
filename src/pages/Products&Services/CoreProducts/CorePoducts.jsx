import { Box, Slide, Typography } from "@mui/material";
import { ChildeBox, ChildrenHolder } from "../ProductsStyles";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

// eslint-disable-next-line react/prop-types
function CorePoducts({ showing }) {
	return (
		<Slide
			in={showing === "products"}
			timeout={{ enter: 800, exit: 10 }}
		>
			<ChildrenHolder>
				<PerfectScrollbar>
					<Box
						display={"flex"}
						flexDirection="column"
						alignItems={"center"}
						justifyContent={"start"}
						gap={"2rem"}
					>
						<Typography
							width={"85%"}
							variant="h5"
							fontWeight={"bold"}
							color={"whitesmoke"}
							textAlign={"left"}
							lineHeight={"1.5rem"}
						>
							Insura is not just a<br />
							&emsp; product, it's a promise.
						</Typography>
						<ChildeBox>
							<Box
								component={"img"}
								src=".\\assets\Images\ProductAndServices\Frame 268.svg"
								width={"60px"}
								height={"60px"}
							/>
							<Typography
								fontWeight={"bold"}
								variant="h5"
								color={"dark1.main"}
								mb={"1rem"}
							>
								Long-term care insurance
							</Typography>
							<Typography
								fontWeight={"medium"}
								variant="body1"
								color={"dark1.main"}
							>
								We provide policyholders access necessary care and support,
								while also safeguarding their financial assets and providing
								peace of mind for themselves and their loved ones.
							</Typography>
						</ChildeBox>
						<ChildeBox>
							<Box
								component={"img"}
								src=".\\assets\Images\ProductAndServices\Frame 269.svg"
								width={"60px"}
								height={"60px"}
							/>
							<Typography
								fontWeight={"bold"}
								variant="h5"
								color={"dark1.main"}
								mb={"1rem"}
							>
								Cash-value life insurance
							</Typography>
							<Typography
								fontWeight={"medium"}
								variant="body1"
								color={"dark1.main"}
							>
								Cash value life insurance is a type of permanent life insurance
								that offers a death benefit and a savings or investment
								component.
							</Typography>
						</ChildeBox>
					</Box>
				</PerfectScrollbar>
			</ChildrenHolder>
		</Slide>
	);
}

export default CorePoducts;
