import { Box } from "@mui/material";
import NavBar from "../../ui/NavBar";
import { BackgroundImage, Container, ContentsHolder } from "./AppLayoutStyles";
import ButtonHolder from "../../ui/ButtonHolder";
import useHover from "../../utility/HoverFunction/HoverFunction";
import { Outlet, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { GetLoggedUserInfo } from "../../utility/Auth/GetLoggedUserInfo";

// eslint-disable-next-line react/prop-types
function AppLayout() {
	const { data: userData } = useQuery({
		queryKey: ["user"],
		// must return a promise
		queryFn: () => GetLoggedUserInfo(),
		staleTime: 60 * 1000 * 3,
	});

	const pages = [
		{ name: "Companyoverview" },
		{ name: "WhoWeAre" },
		{ name: "OurUniqeValues" },
		{ name: "Products&Services" },
		{ name: "Login & Sign up" },
	];
	const pages1 = [
		{ name: "Company overview" },
		{ name: "Who We Are" },
		{ name: "Our Uniqe Values" },
		{ name: "Products & Services" },
		{ name: "Login & Sign up" },
		// { name: "Pricing & Discounts" },
		// { name: "Cost Comparition" },
		// { name: "Summery Of Offering" },
	];
	let location = useLocation();
	// console.log(location.pathname);
	const path = location.pathname.replace(/[/%20]/g, "");

	let pageIndex = pages.findIndex(
		(page) => page.name.toLowerCase() === path.toLowerCase()
	);
	console.log(pages.at(pageIndex + 1), pageIndex);
	// hover on NavBar to Show/Hide
	const { IsHovered } = useHover();
	return (
		<Box
			sx={{
				overflow: "hidden !important",
				position: "relative",
				width: "100%",
				height: "100%",
				padding: "0",
			}}
		>
			<BackgroundImage />
			<NavBar mouseHover={IsHovered} />

			<Container>
				<ButtonHolder
					prev
					text={pages1.at(pageIndex - 1).name}
					to={`/${pages1.at(pageIndex - 1).name}`}
				></ButtonHolder>
				<ContentsHolder>
					<Outlet />
				</ContentsHolder>
				<ButtonHolder
					next
					text={pages1.at(pageIndex + 1).name}
					buttonBorderColor="#FFFFFF"
					to={`/${pages1.at(pageIndex + 1).name}`}
				></ButtonHolder>
			</Container>
		</Box>
	);
}

export default AppLayout;
