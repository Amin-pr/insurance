/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import { ArrowForwardIos } from "@mui/icons-material";
import { Box, ToggleButton } from "@mui/material";
import { useState } from "react";

function TogglingButton({
	width = "150px",
	height = "50px",
	background = "#18575B",
	backgroundHoverColor = "#8DACAE",
	arrowColor = "white",
	arrowHoverColor = "#18575B",
	sx,
	children,
	value,
	size = "medium",
	selected = false,
	handleClick = () => console.log("toggleButton clicked"),
}) {
	const TogglingButton = styled(ToggleButton)(() => {
		return {
			borderRadius: "0.5rem",
			padding: "1.5rem",
		};
	});

	const [color, setColor] = useState(arrowColor);
	const [backgroundColor, setBackgreoundColor] = useState(background);

	const onClick = (e) => {
		handleClick(e);
		setColor(arrowColor);
	};

	return (
		<TogglingButton
			onMouseEnter={() => {
				setColor(arrowHoverColor);
				setBackgreoundColor(backgroundHoverColor);
			}}
			onMouseLeave={() => {
				setColor(arrowColor);
				setBackgreoundColor(background);
			}}
			aria-label="benifit button"
			selected={selected}
			value={value}
			sx={sx}
			onClick={(e) => onClick(e)}
			size={size}
		>
			{children}
			<Box
				marginLeft={"1rem"}
				width={"2rem"}
				height={"2rem"}
				borderRadius={"1rem"}
				bgcolor={"dark1.main"}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
				backgroundColor={backgroundColor}
				// color={background}
			>
				<ArrowForwardIos
					fontSize=""
					htmlColor={color}
				/>
			</Box>
		</TogglingButton>
	);
}

export default TogglingButton;
