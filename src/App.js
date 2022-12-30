import logo from './logo.svg';
import './App.css';

import { useRef, useState } from 'react';
import { View, Image } from 'react-native-web';
import { Route, Routes } from 'react-router-dom';

import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

import ErrorBoundary from './Utils/ErrorBoundary';
import Galleries from './Components/Galleries/Galleries';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
// import NavReturn from './Components/Nav/NavReturn';
import About from './Components/About';
import FAQ from './Components/FAQ';
import Calendly from './Components/Calendly';
import ParallaxedComponent from './Utils/parallax';

import Context from './Utils/context';
import AppStyles from './Stylesheets/AppStyles';
import TestNav from './Components/Nav/TestNav';
import './Stylesheets/animation-styles.css';
import TestGallery from './Components/Galleries/TestGallery';
import Contact from './Components/Contact/Contact';

function App() {
	const navRef = useRef(null);
	const galleriesRef = useRef(null);
	const bookingRef = useRef(null);
	const aboutRef = useRef(null);
	const faqRef = useRef(null);

	const [prefix, setPrefix] = useState('birthdays');

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
				<Nav />

				<Routes>
					<Route
						exact
						path='/'
						element={<Home />}
						errorElement={<ErrorBoundary />}
					/>

					<Route
						exact
						path='/about'
						ref={aboutRef}
						element={<About />}
						errorElement={<ErrorBoundary />}></Route>
					<Route
						exact
						path='/gallery'
						element={<Galleries />}
						errorElement={<ErrorBoundary />}></Route>
					<Route
						exact
						path='/faq'
						element={<FAQ />}
						errorElement={<ErrorBoundary />}></Route>
					<Route
						exact
						path='/booking'
						element={<Calendly />}
						errorElement={<ErrorBoundary />}></Route>
					<Route
						exact
						path='/contact'
						element={<Contact />}
						errorElement={<ErrorBoundary />}></Route>
				</Routes>

				{/* <ErrorBoundary>
					<ParallaxedComponent />
				</ErrorBoundary> */}
			</View>
		</Context.Provider>
	);
}

export default App;
