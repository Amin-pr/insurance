import { useState } from "react";

function useScrollFunction({ maxScrollAmount }) {
	const [scrollAmount, setScrollAmount] = useState(0);
	const [isScrolling, setIsScrolling] = useState(false);

	const handleScroll = (e) => {
		if (isScrolling) return;

		setIsScrolling(true);

		const deltaY = e.deltaY;

		if (deltaY > 0 && scrollAmount < maxScrollAmount) {
			setScrollAmount((prevScrollAmount) => prevScrollAmount + 1);
		} else if (deltaY < 0 && scrollAmount > 0) {
			setScrollAmount((prevScrollAmount) => prevScrollAmount - 1);
		}

		setTimeout(() => setIsScrolling(false), 2000);
	};
	return { scrollAmount, handleScroll };
}
export default useScrollFunction;
