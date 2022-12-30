let imageWidth = window.innerWidth < window.innerHeight ? '20%' : 'undefined';
let imageHeight = window.innerWidth < window.innerHeight ? 'undefined' : '20%';
const GalleryStyles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		height: '90vh',
		width: '100vw',
		backgroundColor: 'black',
	},
	button: {
		color: 'whitesmoke',
		backgroundColor: 'darkgray',
		padding: '0.3em',
		borderRadius: '0.3em',
	},
	buttonsContainer: {
		height: 'fit-content',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'space-around',
		padding: '1em',
		textAlign: 'center',
		color: 'smokewhite',
	},
	gallery: {
		alignSelf: 'center',
		width: '100vw',
		height: '15vh',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: '10vh',
		alignItems: 'center',
		justifyContent: 'center',

		borderRadius: '3%',
		padding: '1em',
	},
	pressable: { flexGrow: 1, height: '100%', width: 'fit-content' },
};

export default GalleryStyles;
