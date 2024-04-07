/* eslint-disable react/prop-types */

import { Avatar, Card, CardContent, Typography } from "@mui/material";
import BioOverlayModal from "../pages/WhoWeAre/BioOverlay/BioOverlayModal";

export default function BioCard({ person }) {
	return (
		<Card
			variant="outlined"
			sx={{
				border: "1px solid #18575B",
				margin: "2rem",
				borderRadius: "1rem",
				height: "75%",
				overflow: "visible",
			}}
		>
			<CardContent
				sx={{
					paddingBottom: "1rem !Important",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					textAlign: "center",
					gap: "1rem",
					position: "relative",
				}}
			>
				<BioOverlayModal person={person}></BioOverlayModal>
				<Avatar
					variant="circular"
					src={person.image}
					sx={{
						minWidth: "4rem",
						minHeight: "4rem",
						width: "40%",
						height: "40%",
						border: "1.5px solid teal",
					}}
				></Avatar>
				<Typography
					fontWeight={"bold"}
					variant="body1"
					color={"dark1.main"}
				>
					{person.name}
				</Typography>
				<Typography
					variant="body1"
					color={"dark1.main"}
					textAlign={"center"}
				>
					{person.position}
				</Typography>
			</CardContent>
		</Card>
	);
}
