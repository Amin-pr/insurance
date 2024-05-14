/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Slide, Typography } from "@mui/material";
import { Holder } from "./StoryBehindStyles";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function StoryBehind({ scrollAmount }) {
	return (
		<Slide
			in
			direction="up"
		>
			<Holder
				zIndex={"2"}
				position={"relative"}
				display={"flex"}
				justifyContent={"space-between"}
				boxSizing={"border-box"}
				// rowGap={"2rem"}
			>
				<Typography
					variant="h6"
					fontSize={"18px"}
				>
					Founded by banking tycoon Franklin Behr in 1899, Insura was created to
					make the power of compounding interest accessible to everyone. Insura
					is dedicated to providing quality coverage and options for insurance
					needs, Insura's friendly and knowledgeable staff are available to help
					find the ideal plan for any situation, be it auto, home, or business
					insurance. With the selection process of insurance potentially
					overwhelming, Insura works to make obtaining the necessary coverage
					simple.
				</Typography>
				<Box
					height={"2rem"}
					width={"50%"}
					bgcolor={"dark1.main"}
					alignSelf={"end"}
					justifySelf={"end"}
					// position={"absolute"}
					// bottom={0}
					// right={0}
					borderRadius={" 1rem 0 1rem 0"}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"center"}
				>
					<Link to={"/Who We Are"}>
						<Button color="white">Who We Are</Button>
					</Link>
				</Box>
			</Holder>
		</Slide>
	);
}

export default StoryBehind;
