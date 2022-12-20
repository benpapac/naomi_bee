const GalleryStyles = {

	container: {
		display: 'flex',
		flexDirection: 'row',
		height: '100vh',
		width: '100vw'

	},
	buttonsContainer: {
		width: '5vw',
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		textAlign: 'center',
	},
	gallery: {
		alignSelf: 'center',
		width: '90vw',
		height: '85vh',
		marginLeft: '4vw',
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
