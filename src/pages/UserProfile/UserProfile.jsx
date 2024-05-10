import { Box, Typography } from "@mui/material";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

function UserProfile() {
    
	const queryClient = useQueryClient();
	const userData = queryClient.getQueryData(["user"]);
	console.log(userData);
	return (
		<Box
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
		>
			<Typography>wellcome {userData?.user.email}</Typography>
		</Box>
	);
}

export default UserProfile;
