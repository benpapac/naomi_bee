let baseDim = window.innerWidth < window.innerHeight ? 'vw' : 'vh';
let imageWidth = window.innerWidth < window.innerHeight ? '100%' : '90%';

const NavStyles = {
	hiddenContainer: {
		zIndex: 1,
		position: 'fixed',
		paddingVertical: '5vh',

		top: 0,
		right: 0,
		height: '100vh',
		width: '20vw',
		alignItems: 'center',
		justifyContent: 'space-around',

		animation: 'navslideout 2s',
		transform: 'translateX(200%)',
		backgroundColor: '#F2AA4F',

		transition: 'ease 2s',
	},

	container: {
		zIndex: 1,
		position: 'fixed',
		top: 0,
		right: 0,

		height: '100vh',
		width: '20vw',
		marginHorizontal: 'auto',

		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: '#EE7C30',
		paddingVertical: '5vh',

		transition: 'ease 2s',
	},

	link: {
		textDecoration: 'none',
		fontSize: '16px',
		fontWeight: '500',
		color: 'black',
	},

	hiddenToggler: {
		zIndex: 1,
		position: 'fixed',
		width: '64px',
		height: '64px',
		left: '94vw',
		top: '5vh',

		alignItems: 'center',
		justifyContent: 'center',

		transform: 'translateX(200%)',
		transition: 'ease 1s',
	},
	toggler: {
		zIndex: 2,
		position: 'fixed',
		width: '64px',
		height: '64px',
		left: '94vw',
		top: '5vh',

		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: '100%',

		transition: 'ease 1.5s',
	},
	navTogglerImage: {
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
};

export default NavStyles;
