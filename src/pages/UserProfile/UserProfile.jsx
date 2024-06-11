import { Box, Typography } from "@mui/material";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { GetLoggedUserInfo } from "../../utility/Auth/GetLoggedUserInfo";

function UserProfile() {
	// get logged in user data
	const { data: userData } = useQuery({
		queryKey: ["user"],
		// must return a promise
		queryFn: () => GetLoggedUserInfo(),
		staleTime: 60 * 1000 * 3,
	});

	const queryClient = useQueryClient();
	const logedUser = queryClient.getQueryData(["user"]);
	console.log(userData, logedUser);

	return (
		<Box
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
		>
			<Typography>wellcome {userData?.user?.email}</Typography>
		</Box>
	);
}

export default UserProfile;
