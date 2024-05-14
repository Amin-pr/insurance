import { Paper, Slide, Typography } from "@mui/material";
import { TextHolder } from "./StartingTextStyles";
// eslint-disable-next-line react/prop-types
function StartingText({ scrollAmount }) {
	return (
		<Slide
			in
			direction="down"
		>
			<TextHolder>
				<Typography
					variant="body1"
					fontSize={"1.5rem"}
					textAlign={"left"}
					color={'whitesmoke'}
					// margin={"3rem 3rem 0 3rem"}
				>
					We understand the importance of ensuring the well-being of employees
					and their families by offering affordable and accessible healthcare
				</Typography>
			</TextHolder>
		</Slide>
	);
}

export default StartingText;
