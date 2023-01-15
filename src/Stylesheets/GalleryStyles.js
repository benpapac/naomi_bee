const GalleryStyles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		marginTop: '15vh',
		height: '85vh',
		width: '100vw',
		// backgroundColor: '#F2AA4F',

		// backgroundColor: 'black',
	},
	button: {
		height: 'fit-content',
		color: 'black',
		backgroundColor: '#D92F54',
		padding: '0.5em',
		// borderRadius: '0.3em',
	},
	buttonsContainer: {
		height: '10%',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'end',
		padding: '1em',
		color: 'smokewhite',
	},

	gallery: {
		marginTop: '0.1em',
		alignSelf: 'center',
		width: '95vw',
		height: 'fit-content',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',

		padding: '0.5em',
		backgroundColor: 'white',
		// backgroundColor: 'gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.8))',
	},

	slideBox: {
		alignSelf: 'center',
		width: '40vw',
		height: '60vh',
		overflow: 'hidden',
	},

	slides: {
		height: '100%',
		width: 'fit-content',
		flexDirection: 'row',
		transition: 'ease 2s',
	},

	pressable: {
		flexGrow: 1,
		height: 'fit-content',
		width: 'fit-content',
		resizeMode: 'contain',
		transition: 'ease 0.3s',
	},
	basicImage: { height: '', width: '', aspectRatio: 1, borderRadius: '1em' },
};

export default GalleryStyles;
