import { useEffect, useState, useRef } from 'react';
import { View, Image } from 'react-native-web';
import useScroll from './useScroll';

/*


I want to useScrollY() to know how far I've scrolled down in my app.
OR, I want to useScrollY() to know whether I'm scrolling up or down.

I want to render a component that uses transform: translateY(val), such that val increments or decrements in a linear fashion, relative to window.scrollY; 


*/

const ParallaxedComponent = ({ parent }) => {
	const BEE_URL = process.env.REACT_APP_BEE_URL;
	const BUTTERFLY = process.env.REACT_APP_BUTTERFLY;
	const scrollY = useScroll();
	const [initiated, setInitiated] = useState(false);
	const [yPos, setYPos] = useState(window.innerHeight);
	const [oldY, setOldY] = useState(0);
	const ref = useRef(null);

	const speed = 1;
	const [drift, setDrift] = useState(0);

	useEffect(() => {
		let parentHeight = parent.current.scrollHeight;
		let refHeight = ref.current.scrollHeight;
		let windowHeight = window.innerHeight;

		console.log(scrollY, parentHeight, windowHeight);

		setYPos(window.innerHeight - scrollY - drift);
		if (oldY < scrollY) {
			setDrift(drift + speed);
		} else {
			setDrift(drift - speed);
		}
		setOldY(scrollY);
	}, [scrollY]);

	// return {renderItem(yPos)}
	return (
		<View
			ref={ref}
			style={{
				position: 'fixed',
				zIndex: '-1',
				top: `${yPos}px`,
				left: '40vw',
				width: 'fit-content',
				height: 'fit-content',
				// transform: `translateY(${yPos})`,
				backgroundColor: 'blue',
			}}>
			<Image
				style={{
					flexGrow: 1,
					height: '30vh',
					width: '30vw',
				}}
				source={{ uri: BEE_URL + BUTTERFLY }}
			/>
		</View>
	);
};

export default ParallaxedComponent;
