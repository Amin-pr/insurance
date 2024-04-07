/* eslint-disable react/prop-types */
import { AppBar, Box, Button, Slide, Toolbar } from "@mui/material";
import Logo from "./Logo";
import { AppsRounded } from "@mui/icons-material";

function NavBar({ mouseHover }) {
	return (
		<Slide in={mouseHover}>
			<Box
				position={"absolute"}
				width={"100%"}
				top={"0"}
				left={"0"}
				sx={{ flexGrow: 0.5 }}
				zIndex={1}
				// visibility={`${mouseHover ? "visible" : "hidden"}`}
			>
				<AppBar
					position="static"
					color="dark2"
					elevation={0}
				>
					<Toolbar
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<Logo width="125" />
						<Button
							sx={{ padding: "5px !important", minWidth: "0 !important" }}
							size="small"
							color="white"
							variant="outlined"
						>
							<AppsRounded></AppsRounded>
						</Button>
						<Button color="white">Disclamer</Button>
					</Toolbar>
				</AppBar>
			</Box>
		</Slide>
	);
}

export default NavBar;
