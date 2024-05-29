import { ArrowForward, ArrowForwardIos } from "@mui/icons-material";
import { Fab, styled } from "@mui/material";
import { Link } from "react-router-dom";

function NextButton({to}) {
	const NextButton = styled(Fab)(({ theme }) => {
		return {
			backgroundColor: theme.palette.dark1.main,
			position: "absolute",
			bottom: "1%",
			right: "1%",
		};
	});

	return (
		<Link to={to}>
			<NextButton>
				<ArrowForwardIos />
			</NextButton>
		</Link>
	);
}

export default NextButton;
