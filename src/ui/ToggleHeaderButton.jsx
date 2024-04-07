import styled from "@emotion/styled";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function ToggleHeaderButton({ alignment, handleAlignment }) {
	const ToggleHeaderButtonGroup = styled(ToggleButtonGroup)(({ theme }) => {
		return {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-around",
			position: "absolute",
			top: "0",

			right: "2rem",
			left: "3rem",
			margin: "auto",
			width: "80%",
			minHeight: "60px",
			translate: "0 -50%",
			borderRadius: "0.5rem",
			// padding: "0.5rem",
			backgroundColor: theme.palette.dark1.main,
		};
	});
	return (
		<ToggleHeaderButtonGroup
			fullWidth
			color="white"
			size="small"
			value={alignment}
			exclusive
			onChange={handleAlignment}
			aria-label="text alignment"
		>
			<ToggleButton
				value="left"
				aria-label="left aligned"
				sx={{ color: "medium.main" }}
			>
				Mission <br />
				driven
			</ToggleButton>
			<ToggleButton
				value="center"
				aria-label="centered"
				sx={{ color: "medium.main" }}
			>
				Long term <br />
				relationships
			</ToggleButton>
			<ToggleButton
				value="right"
				aria-label="right aligned"
				sx={{ color: "medium.main" }}
			>
				Data <br />
				driven
			</ToggleButton>
		</ToggleHeaderButtonGroup>
	);
}
