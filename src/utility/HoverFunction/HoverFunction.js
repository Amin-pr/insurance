import { useEffect, useState } from "react";

function useHover() {
	const [IsHovered, setIsHovered] = useState(false);
	// mouse tracking
	useEffect(() => {
		const handleMouseMove = (event) => {
			const oneTenthOfScreenHeight = window.innerHeight / 10;
			if (event.clientY <= oneTenthOfScreenHeight) {
				setIsHovered(true);
			} else {
				setIsHovered(false);
			}
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);
	return { IsHovered };
}
export default useHover;
