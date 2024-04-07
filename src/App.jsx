/* eslint-disable no-unused-vars */
import { Box } from "@mui/material";
import Agenda from "./pages/Agenda/Agenda";
import AppLayout from "./pages/AppLayout/AppLayout";
// import CompanyOverView from "./pages/Company_overview/CompanyOverview";
import GettStarted from "./pages/GettStarted/GettStarted";
import NavBar from "./ui/NavBar";
import CompanyOverView from "./pages/Company_overview/CompanyOverview";
import Gallery from "./pages/Company_overview/Gallery/Gallery";
import WhoWeAre from "./pages/WhoWeAre/WhoWeAre";
import WhoWeAre2 from "./pages/WhoWeAre/WhoWeAre2/WhoWeAre2";
import OurUniqeValue from "./pages/OurUniqueValue/OurUniqeValue";
import Products from "./pages/Products&Services/Products";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route>
				<Route
					path="/"
					element={<GettStarted />}
				/>
				<Route
					path="Home"
					element={<Agenda />}
				/>
				<Route element={<AppLayout></AppLayout>}>
					<Route
						path="Company overview"
						element={<CompanyOverView />}
					/>
					<Route
						path="Who We Are"
						element={<WhoWeAre />}
					>
						<Route
							path="Team"
							element={<WhoWeAre2 />}
						/>
					</Route>
					<Route
						path="Our Uniqe Values"
						element={<OurUniqeValue />}
					/>
					<Route
						path="Products & Services"
						element={<Products />}
					/>
				</Route>
			</Route>
		)
	);

	return (
		<Box
			padding={0}
			margin={0}
			width={"100vw"}
			height={"100vh"}
		>
			<RouterProvider router={router} />
		</Box>
	);
}

export default App;
