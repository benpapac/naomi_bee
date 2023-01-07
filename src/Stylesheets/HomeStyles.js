const HomeStyles = {
	container: {
		marginTop: '15vh',
		height: '85vh',
		width: '100vw', // the number of columns you want to devide the screen into
		marginHorizontal: 'auto',

		// display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-around',

		paddingHorizontal: '2em',

		// animation: '3s alternate rotate',
	},
	gallery: {
		flex: 2,
		margin: '1em',

		alignSelf: 'center',
		height: '100%',
		width: '88%',
		// flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: 'white',
	},

	overlay: {
		position: 'absolute',
		zIndex: 1,

		height: '100%',
		width: '100%',

		textAlign: 'center',
		paddingVertical: '35%',
		fontSize: '40px',
		fontWeight: '800',
		backgroundColor: 'rgba(244,244,244,0.4)',
	},

	skinnyBox: {
		flex: 0.75,
		margin: '1em',

		backgroundColor: 'yellow',
	},

	box: {
		flex: 1,
		margin: '1em',
		// width: '100%',
		// height: '100%',
		backgroundColor: 'gray',
		borderWidth: '1px',
		borderColor: 'white',
	},

	tallBox: {
		flex: 1.5,
		margin: '1em',

		backgroundColor: 'aliceblue',
		borderWidth: '1px',
		borderColor: 'white',
	},

	doubleBox: {
		flex: 2,
		margin: '1em',

		backgroundColor: 'brown',
		borderWidth: '1px',
		borderColor: 'white',
	},

	column: {
		flexDirection: 'column',
		width: '20%',
		height: '100%',
	},

	doubleColumn: {
		flexDirection: 'column',
		height: '100%',
		width: '35%',
	},

	wideColumn: {
		flexDirection: 'column',
		width: '25%',
		height: '100%',
	},
	pressable: {
		flex: 1,
		height: '100%',
		width: '100%',
	},
	basicImage: { flex: 1, margin: '1em', resizeMode: 'contain' },
	galleryImage: { height: '25%', width: '', resizeMode: 'cover' },
};

export default HomeStyles;
