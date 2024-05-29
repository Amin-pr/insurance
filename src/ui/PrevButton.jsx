import { ArrowBackIosNew } from "@mui/icons-material";
import { Fab, styled } from "@mui/material";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function PrevButton({ to }) {
	const PrevButton = styled(Fab)(({ theme }) => {
		return {
			position: "absolute",
			bottom: "1%",
			left: "1%",
			display: "none",
			[theme.breakpoints.down("md")]: { display: "block" },
		};
	});

	return (
		<Link to={to}>
			<PrevButton>
				<ArrowBackIosNew />
			</PrevButton>
		</Link>
	);
}

export default PrevButton;
