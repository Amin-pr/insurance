/* eslint-disable react/prop-types */
import { Avatar, Box, Divider, Modal, Typography } from "@mui/material";
import { useState } from "react";
import ButtonNav from "../../../ui/NavButton";
import { LinkedIn, MailOutline } from "@mui/icons-material";

function BioOverlayModal({ person }) {
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		maxWidth: "40%",
		bgcolor: "accent.main",
		border: "2px solid #000",
		boxShadow: 24,
		pt: 5,
		borderRadius: "1rem ",
	};

	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<ButtonNav
				onClick={handleOpen}
				arrowHoverColor={"dark1"}
				add
				sx={{
					position: "absolute",
					top: "-1rem",
					right: "-1rem",
					zIndex: "2",
					backgroundColor: "#18575B",
				}}
				handleClick={handleOpen}
			>
				Open modal
			</ButtonNav>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					// width="50%"
					height="50%"
					sx={style}
					flexDirection={"column"}
					bgcolor={"#279D81"}
				>
					<Box
						height={"100%"}
						width={"100%"}
						sx={{
							borderRadius: "1rem",
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							bgcolor: "whitesmoke",
						}}
					>
						<Box
							sx={{
								padding: "2rem",
								textWrap: "nowrap ",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								// justifyContent: "space-around",
								width: "30%",
								// bgcolor: "red",
							}}
						>
							<Avatar
								variant="circular"
								src={person.image}
								sx={{
									minWidth: "4rem",
									minHeight: "4rem",
									maxWidth: "6rem",
									maxHeight: "6rem",
									width: "100%",
									height: "100%",
									border: "1.5px solid teal",
									bgcolor: "blue",
								}}
							></Avatar>
							<Typography
								// bgcolor={"blue"}
								variant="body1"
								fontWeight={"medium"}
								margin={"1rem"}
								textAlign={"center"}
							>
								{person.name}
								<Typography variant="body1"> {person.position}</Typography>
							</Typography>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "center",
									flexWrap: "nowrap",
									gap: "1rem",
								}}
							>
								<LinkedIn />
								<MailOutline />
							</Box>
						</Box>
						<Divider
							orientation="vertical"
							variant="middle"
							flexItem
						/>
						<Box sx={{ padding: "2rem" }}>
							<Typography
								variant="body2"
								fontSize={"13px"}
							>
								{person.description}
							</Typography>
						</Box>
					</Box>

					{/* <Typography
						id="modal-modal-title"
						variant="h6"
						component="h2"
					>
						Text in a modal
					</Typography>
					<Typography
						id="modal-modal-description"
						sx={{ mt: 2 }}
					>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula. */}
					{/* </Typography> */}
				</Box>
			</Modal>
		</div>
	);
}

export default BioOverlayModal;
