import { Box, Button, Grid } from "@mui/material";
import BioCard from "../../../ui/BioCard";

function WhoWeAre2() {
	const group = [
		{
			name: "Lucas Michell",
			position: "Network Manager",
			image: "src/assets/Images/WhoWeAre/Mask group.png",
			description:
				"As our Network Relations Manager, Lucas is responsible for maintaining strong relationships with healthcare providers. With his excellent communication and negotiation skills, he works diligently to expand our network, ensuring our members have access to a wide range of high-quality healthcare professionals. Alexander's dedication to building and nurturing provider partnerships contributes to the exceptional care experience we offer.",
		},
		{
			name: "Lucas Michell",
			position: "Network Manager",
			image: "src/assets/Images/WhoWeAre/Mask group.png",
		},
		{
			name: "Lucas Michell",
			position: "Network Manager",
			image: "src/assets/Images/WhoWeAre/Mask group.png",
		},
		{
			name: "Lucas Michell",
			position: "Network Manager",
			image: "src/assets/Images/WhoWeAre/Mask group.png",
		},
		{
			name: "Lucas Michell",
			position: "Network Manager",
			image: "src/assets/Images/WhoWeAre/Mask group.png",
		},
		{
			name: "Lucas Michell",
			position: "Network Manager",
			image: "src/assets/Images/WhoWeAre/Mask group.png",
		},
	];
	return (
		<Box
			width={"100%"}
			height={"100%"}
			// bgcolor={"red"}
			position={"relative"}
		>
			<Button
				size="larg"
				sx={{
					lineHeight: "1rem",
					position: "absolute",
					textDecorationLine: "underline",
					textUnderlineOffset: "2px",
					top: "2rem",
					left: "2rem",
				}}
				color="dark1"
			>
				Back
			</Button>
			<Grid
				container
				width={"100%"}
				height={"100%"}
				direction={"row"}
				padding={"6% 7%"}
			>
				{group.map((person, index) => {
					return (
						<Grid
							item
							key={index}
							xs={4}
						>
							<BioCard person={person} />
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
}

export default WhoWeAre2;
