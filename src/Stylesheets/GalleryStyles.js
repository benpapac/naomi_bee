let imageWidth = window.innerWidth < window.innerHeight ? '20%' : 'undefined';
let imageHeight = window.innerWidth < window.innerHeight ? 'undefined' : '20%';
const GalleryStyles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
		width: '100vw',
		backgroundColor: '#A3249B',

		// backgroundColor: 'black',
	},
	button: {
		padding: '2em',
		height: 'fit-content',
		color: 'whitesmoke',
		backgroundColor: 'darkgray',
		padding: '0.3em',
		borderRadius: '0.3em',
	},
	buttonsContainer: {
		height: '20%',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'end',
		padding: '1em',
		color: 'smokewhite',
	},
	gallery: {
		alignSelf: 'center',
		width: '100vw',
		height: '15vh',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',

		borderRadius: '3%',
		padding: '1em',
	},

	centerImageView: {
		padding: '1em',
		height: '60%',
		width: '100vw',
		aspectRatio: 1,
	},

	centerImage: {
		alignSelf: 'center',
		flex: 1,
		width: '',
		height: '100%',
		aspectRatio: 1,
		borderWidth: '1em',
		borderColor: 'white',
		boxShadow: '10px 10px 10px black',

		// resizeMode: 'contain',
	},
	pressable: {
		flexGrow: 1,
		height: '100%',
		width: 'fit-content',
		boxShadow: '20px 20px 10px black',
	},
};

export default GalleryStyles;
