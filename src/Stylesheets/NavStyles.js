const NavStyles = {
	navReturn: {
		position: 'fixed',
		width: '6vw',
		height: 'fit-content',
		left: '95vw',
		top: '5vh',
		backgroundColor: 'none',
	},
	navReturnImage: {
		width: '5vw',
		height: '6vh',
	},
	container: {
		alignSelf: 'center',
		height: '100vh',
		width: '90vw',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	pressable: {
		flex: 1,
		width: '15vw',
		height: '15vw',
		// backgroundColor: '#ffda3d',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},

	pressableText: {
		position: 'absolute',
		zIndex: 1,
		width: '18vw',
		height: '18vw',
		paddingTop: '8vw',
		textAlign: 'center',
		justifyText: 'center',
		fontSize: '20px',
		backgroundColor: 'rgba(255,255,255,0.4)',
	},
};

export default NavStyles;
