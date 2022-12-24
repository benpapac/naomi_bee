let baseDim = window.innerWidth < window.innerHeight ? 'vw' : 'vh';
let imageWidth = window.innerWidth < window.innerHeight ? '100%' : '90%';
let imageHeight = window.innerWidth < window.innerHeight ? '90%' : '100%';

const NavStyles = {
	container: {
		height: '100vh',
		width: '100vw', // the number of columns you want to devide the screen into
		marginHorizontal: 'auto',

		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',

		// animation: '3s alternate rotate',
	},

	gallery: {
		height: '50vw',
		alignSelf: 'center',
		width: '50vw',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',

		alignItems: 'center',
		alignContent: 'center',
	},
	navReturn: {
		position: 'fixed',
		width: '12vw',
		height: '12vw',
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
	visibleImageLeft: {
		alignSelf: 'start',
		minWidth: '20%',
		height: '100%',
		// backgroundColor: '#ffda3d',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},

	visibleImageRight: {
		alignSelf: 'end',
		minWidth: '20%',
		height: '100%',
		// backgroundColor: '#ffda3d',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
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
