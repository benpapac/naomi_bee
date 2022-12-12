import logo from './logo.svg';
import './App.css';

import { useRef } from 'react';
import { View } from 'react-native-web';

import Galleries from './Components/Galleries/Galleries';
import Nav from './Components/Nav/Nav';
import About from './Components/About';
import FAQ from './Components/FAQ';
import Calendly from './Components/Calendly';

import RefsContext from './Utils/context';

function App() {
	const navRef = useRef(null);
	const galleriesRef = useRef(null);
	const bookingRef = useRef(null);
	const aboutRef = useRef(null);
	const faqRef = useRef(null);

	// I would love to refactor refs in a programmatic way.
	// https://beta.reactjs.org/learn/manipulating-the-dom-with-refs#:~:text=DEEP-,DIVE,-How%20to%20manage

	return (
		<RefsContext.Provider
			value={{
				navRef: navRef,
				galleriesRef: galleriesRef,
				bookingRef: bookingRef,
				aboutRef: aboutRef,
				faqRef: faqRef,
			}}>
			<View className='App'>
				<Nav ref={navRef} />
				<Galleries ref={galleriesRef} />
				<About ref={aboutRef} />
				<FAQ ref={faqRef} />
				<Calendly ref={bookingRef} />
			</View>
		</RefsContext.Provider>
	);
}

export default App;
