/* eslint-disable no-unused-vars */
import { Box } from "@mui/material";
import Agenda from "./pages/Agenda/Agenda";
import AppLayout from "./pages/AppLayout/AppLayout";
import GettStarted from "./pages/GettStarted/GettStarted";
import CompanyOverView from "./pages/Company_overview/CompanyOverview";
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
import Login from "./pages/Login/LoginPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UserProfile from "./pages/UserProfile/UserProfile";
import DeviceType from "./utility/Device Type/Device Type";

function App() {
	//device width
	const device = DeviceType();

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
					<Route
						path="Login & Sign Up"
						element={<Login />}
					></Route>
					<Route
						path="user"
						element={<UserProfile />}
					></Route>
				</Route>
			</Route>
		)
	);

	const queryClient = new QueryClient({
		defaultOptions: { queries: { staleTime: 60 * 1000 } },
	});

	return (
		<Box
			boxSizing={"border-box"}
			padding={0}
			margin={0}
			width={"100dvw"}
			height={"100dvh"}
		>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools />
				<RouterProvider router={router} />
			</QueryClientProvider>
		</Box>
	);
}

export default App;
