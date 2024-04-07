import { createTheme } from "@mui/material";

export const theme = createTheme({
	typography: { fontFamily: "Karla" },
	palette: {
		dark1: {
			main: "#18575B",
			// dark: "#082F32",
			light: "#DCECED",
		},
		dark2: {
			main: "#082F32",
		},
		accent: { main: "#279D81" },

		light: { main: "#DCECED" },
		white: { main: "#ffffff" },
		medium: { main: "#8DACAE" },
	},
});
