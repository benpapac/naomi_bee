import logo from './logo.svg';
import './App.css';

import { useRef, useState } from 'react';
import { View } from 'react-native-web';

import ErrorBoundary from './Utils/ErrorBoundary';
import Galleries from './Components/Galleries/Galleries';
import Nav from './Components/Nav/Nav';
import NavReturn from './Components/Nav/NavReturn';
import About from './Components/About';
import FAQ from './Components/FAQ';
import Calendly from './Components/Calendly';

import Context from './Utils/context';
import AppStyles from './Stylesheets/AppStyles';

function App() {
	const navRef = useRef(null);
	const galleriesRef = useRef(null);
	const bookingRef = useRef(null);
	const aboutRef = useRef(null);
	const faqRef = useRef(null);

	const [prefix, setPrefix] = useState('birthdays/');

	// I would love to refactor refs in a programmatic way.
	// https://beta.reactjs.org/learn/manipulating-the-dom-with-refs#:~:text=DEEP-,DIVE,-How%20to%20manage

	return (
		<Context.Provider
			value={{
				navRef: navRef,
				galleriesRef: galleriesRef,
				bookingRef: bookingRef,
				aboutRef: aboutRef,
				faqRef: faqRef,
				prefix: prefix,
				setPrefix: setPrefix,
			}}>
			<View className='App' style={AppStyles.container}>
				<NavReturn />
				<ErrorBoundary>
					<Nav ref={navRef} />
				</ErrorBoundary>

				<ErrorBoundary>
					<Galleries ref={galleriesRef} />
				</ErrorBoundary>

				<ErrorBoundary>
					<About ref={aboutRef} />
				</ErrorBoundary>

				<ErrorBoundary>
					<FAQ ref={faqRef} />
				</ErrorBoundary>

				<Calendly ref={bookingRef} />
			</View>
		</Context.Provider>
	);
}

export default App;
