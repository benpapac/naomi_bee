const HomeStyles = {
	container: {
		marginTop: '10vh',
		height: '90vh',
		width: '100vw', // the number of columns you want to devide the screen into
		marginHorizontal: 'auto',

		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-around',

		// animation: '3s alternate rotate',
	},
	gallery: {
		marginTop: '40vh',
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
		width: '20vw',
		backgroundColor: 'blue',
		border: '1px solid black',
	},
	basicImage: { flex: 1, height: '100%', width: '100%' },
};

export default HomeStyles;
