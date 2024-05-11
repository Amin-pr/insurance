import { Box, Grow, Slide, Typography } from "@mui/material";
import {
	ChildrenHolder,
	TextBox,
	Benifit,
	Benifitsnumbers,
	BenifitItem,
	BenifitsToggleNumbers,
} from "./ServicesBenifitsStyles";
import { useState } from "react";

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

// eslint-disable-next-line react/prop-types

function ServicesBenifits({ showing = 1 }) {
	const [slideNumber, setSlideNumber] = useState(1);

	const benifitsData = [
		{
			num: 1,
			name: "Comprehensive Medical Coverage",
			description:
				"Health insurance provides employees with access to a wide range of medical services, including preventive care, doctor visits, hospitalization, prescription medications, and specialist consultations. ",
			iconSrc: ".\\assets\\Images\\ProductAndServices\\Benifits-Icon-1.svg",
		},
		{
			num: 2,
			name: "Financial Protection",
			description:
				"Health insurance helps protect employees from high medical costs. It provides coverage for major medical procedures, surgeries, and treatments, reducing the financial burden on employees and their families.",
			iconSrc: ".\\assets\\Images\\ProductAndServices\\Benifits-Icon-2.svg",
		},
		{
			num: 3,
			name: "Employee Assistance Programs (EAPs)",
			description:
				"Some health insurance plans offer EAPs, which provide confidential counseling and support services to employees and their families for a wide range of personal and work-related challenges. EAPs can address stress, mental health concerns, financial issues, and more, helping employees navigate difficult situations and maintain their well-being.",
			iconSrc: `.\\assets\\Images\\ProductAndServices\\Benifits-Icon-3.svg`,
		},
	];

	function slideHandler(e) {
		setSlideNumber(e.target.value);
		console.log(e.target.value);
	}

	return (
		<Slide
			in={showing === "benifits"}
			timeout={{ enter: 800, exit: 50 }}
			direction="up"
		>
			<ChildrenHolder>
				<Box
					component={"img"}
					src=".\\assets\Images\ProductAndServices\benifits.jpg"
					sx={{ width: "100%" }}
				/>
				<TextBox>
					<Benifitsnumbers>
						<BenifitsToggleNumbers
							value={1}
							onClick={(e) => slideHandler(e)}
							selected={slideNumber == 1}
						>
							1
						</BenifitsToggleNumbers>
						<BenifitsToggleNumbers
							value={2}
							onClick={(e) => slideHandler(e)}
							selected={slideNumber == 2}
						>
							2
						</BenifitsToggleNumbers>
						<BenifitsToggleNumbers
							value={3}
							onClick={(e) => slideHandler(e)}
							selected={slideNumber == 3}
						>
							3
						</BenifitsToggleNumbers>
					</Benifitsnumbers>
					<Benifit>
						<PerfectScrollbar>
							{benifitsData.map((benifit) => {
								return (
									<BenifitItem key={benifit.num}>
										<Grow
											timeout={{ enter: 700, exit: 100 }}
											in={slideNumber == benifit.num}
										>
											<BenifitItem>
												<Box
													sx={{
														boxSizing: "border-box",
														display: "flex",
														flexDirection: "row",
														alignItems: "center",
														justifyContent: "start",
														height: "150px",
														rowGap: "2rem",
														columnGap: "2rem",
														padding: "2rem",
													}}
												>
													<Box
														component={"img"}
														src={benifit.iconSrc}
													/>
													<Typography variant="h5">{benifit.name}</Typography>
												</Box>

												<Typography variant="body1">
													{benifit.description}
												</Typography>
											</BenifitItem>
										</Grow>
									</BenifitItem>
								);
							})}
						</PerfectScrollbar>
						;
					</Benifit>
				</TextBox>
			</ChildrenHolder>
		</Slide>
	);
}

export default ServicesBenifits;
