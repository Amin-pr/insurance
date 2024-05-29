import { ArrowForwardIos } from "@mui/icons-material";
import { Fab, styled } from "@mui/material";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function NextButton({ to }) {
	const NextButton = styled(Fab)(({ theme }) => {
		return {
			backgroundColor: theme.palette.dark1.main,
			position: "absolute",
			bottom: "1%",
			right: "1%",
			display: "none",
			[theme.breakpoints.down("md")]: { display: "block" },
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
