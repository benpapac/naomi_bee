import React, { useEffect, useState } from 'react';

const useScroll = () => {
	const [scrollHeight, setScrollHeight] = useState(window.scrollY);
	const [altScrollY, setAltScrollY] = useState(window.scrollY);

	const handleScroll = (e) => {
		setScrollHeight(window.scrollY);
		// if (e.path) {
		// 	setScrollHeight(e.path[1].scrollY);
		// 	setAltScrollY(window.scrollY);
		// 	console.log('scrollY: ', window.scrollY);
		// } else {
		// 	setScrollHeight(e.target.scrollingElement.scrollTop);
		// 	setAltScrollY(window.scrollY);
		// 	console.log('scrollY: ', window.scrollY);
		// }
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return scrollHeight;
};

export default useScroll;
