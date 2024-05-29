import { ArrowBackIosNew } from "@mui/icons-material";
import { Fab, styled } from "@mui/material";
import { Link } from "react-router-dom";

function PrevButton({ to }) {
	const PrevButton = styled(Fab)(() => {
		return {
			position: "absolute",
			bottom: "1%",
			left: "1%",
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
