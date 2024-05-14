/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import { Add, ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useState } from "react";

function ButtonNav({
	next,
	prev,
	add,
	background = "#082F32",
	arrowColor = "whitesmoke",
	arrowHoverColor = "whitesmoke",
	sx,
	size = "medium",
	handleClick,
}) {
	let [color, setColor] = useState("whitesmoke");

	const onClick = () => {
		handleClick();
		setColor(arrowColor);
	};
	const StyledFab = styled(Fab)(() => {
		return {
			backgroundColor: `${background}`,
			// ":hover":
		};
	});
	return (
		<StyledFab
			size={size}
			sx={sx}
			// color={'dark1'}
			// onMouseEnter={() => setColor(arrowHoverColor)}
			// onMouseLeave={() => setColor(arrowColor)}
			onClick={onClick}
		>
			{next && <ArrowForwardIos htmlColor={`${color}`} />}
			{prev && <ArrowBackIosNew htmlColor={`${color}`} />}
			{add && <Add htmlColor={`${color}`} />}
		</StyledFab>
	);
}

export default ButtonNav;
