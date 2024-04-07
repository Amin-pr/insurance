import { Slide, Typography } from "@mui/material";
// eslint-disable-next-line react/prop-types
function StartingText({ scrollAmount }) {
	return (
		<Slide
			in={scrollAmount === 0}
			direction="down"
		>
			<Typography
				variant="body1"
				fontSize={"2rem"}
				textAlign={"left"}
				margin={"3rem 3rem 0 3rem"}
			>
				We understand the importance of ensuring the well-being of employees and
				their families by offering affordable and accessible healthcare
			</Typography>
		</Slide>
	);
}

export default StartingText;
