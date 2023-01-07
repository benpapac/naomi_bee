let baseDim = window.innerWidth < window.innerHeight ? 'vw' : 'vh';
let imageWidth = window.innerWidth < window.innerHeight ? '100%' : '90%';

const NavStyles = {
	hiddenToggler: {
		zIndex: 1,
		position: 'fixed',
		width: '64px',
		height: '64px',
		left: '94vw',
		top: '5vh',

		animation: 'navslideout 1s',
		transform: 'translateX(200%)',
	},

	hiddenContainer: {
		zIndex: 1,
		position: 'fixed',
		paddingVertical: '5vh',

		top: 0,
		height: '100vh',
		width: '100vw',
		alignItems: 'center',
		justifyContent: 'space-around',

		animation: 'navslideout 2s',
		transform: 'translateX(100%)',
		backgroundColor: '#F2AA4F',
	},

	container: {
		zIndex: 1,
		position: 'fixed',
		top: 0,
		height: '100vh',
		width: '100vw',
		marginHorizontal: 'auto',

		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: '#EE7C30',
		paddingVertical: '5vh',

		animation: 'navslidein 2s',
	},

	link: {
		textDecoration: 'none',
		fontSize: '16px',
		fontWeight: '500',
		color: 'black',
	},

	navToggler: {
		zIndex: 1,
		position: 'fixed',
		width: '64px',
		height: '64px',
		left: '94vw',
		top: '5vh',

		animation: 'navslidein 2s',

		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: '100%',
	},
	navReturnImage: {
		width: '5vw',
		height: '6vh',
	},

	hiddenImage: {
		display: 'none',
	},

	navPressable: {
		height: '16%',
		width: '100%',
		borderBottom: '1px solid black',
	},

	hiddenText: {
		alignSelf: 'center',
		justifyContent: 'center',
		position: 'absolute',
		zIndex: 1,
		width: imageWidth,
		height: '100%',
		paddingTop: '8vw',
		textAlign: 'center',
		justifyText: 'center',
		fontSize: '20px',
		backgroundColor: 'rgba(255,255,255,0.4)',
		transform: 'translateY(-100%)',
		animation: 'slide-down 0.6s',
	},

	visibleText: {
		alignSelf: 'center',
		justifyContent: 'center',
		position: 'absolute',
		zIndex: 1,
		width: imageWidth,
		height: '100%',
		paddingTop: '8vw',
		textAlign: 'center',
		justifyText: 'center',
		fontSize: '20px',
		backgroundColor: 'rgba(255,255,255,0.4)',
		animation: 'slide-up 0.6s',
	},
};

export default NavStyles;
