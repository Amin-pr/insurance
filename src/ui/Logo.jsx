/* eslint-disable react/prop-types */
import { Box, styled } from "@mui/material";

function Logo({ width = "250", maxWidth, minWidth }) {
	const IconImage = styled(Box)({
		width: `${width}px`,
		maxWidth: `${maxWidth}px`,
		minWidth: `${minWidth}px`,
	});
	return (
		<Box>
			<IconImage
				component={"img"}
				src="public/assets/logo/logo.png"
				alt="company-logo"
			/>
		</Box>
	);
}

export default Logo;
