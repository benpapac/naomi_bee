const HomeStyles = {
	container: {
		marginTop: '10vh',
		height: '90vh',
		width: '100vw', // the number of columns you want to devide the screen into
		marginHorizontal: 'auto',

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',

		// animation: '3s alternate rotate',
	},
	gallery: {
		alignSelf: 'center',
		height: '50vh',
		width: '50vw',
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: 'white',
	},
	pressable: {
		aspectRatio: 1.33,
		width: '20%',
		margin: '2em',
	},
	basicImage: { flex: 1, height: '100%', width: '100%' },
};

export default HomeStyles;
