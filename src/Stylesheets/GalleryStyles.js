const GalleryStyles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
		width: '100vw',
	},
	buttonsContainer: {
		height: 'fit-content',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'space-around',
		textAlign: 'center',
	},
	gallery: {
		alignSelf: 'center',
		width: '85vw',
		height: '85vh',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		alignContent: 'start',

		backgroundColor: 'gray',
		borderRadius: '3%',
		padding: '1em',
	},
};

export default GalleryStyles;
