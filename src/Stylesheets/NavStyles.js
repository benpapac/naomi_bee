let baseDim = window.innerWidth < window.innerHeight ? 'vw' : 'vh';
let imageWidth = window.innerWidth < window.innerHeight ? '100%' : '90%';

const NavStyles = {
	container: {
		height: '10vh',
		width: '100vw', // the number of columns you want to devide the screen into
		marginHorizontal: 'auto',

		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',

		// animation: '3s alternate rotate',
	},

	navReturn: {
		position: 'fixed',
		width: '6vw',
		height: '6vh',
		left: '84vw',
		top: '5vh',

		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
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
