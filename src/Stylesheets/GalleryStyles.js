const GalleryStyles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		marginTop: '15vh',
		width: '100vw',
		backgroundColor: '#F2AA4F',

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
		height: '20%',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'end',
		padding: '1em',
		color: 'smokewhite',
	},

	centerImageView: {
		marginHorizontal: 'auto',
		height: '30vw',
		width: '30vw',
		// aspectRatio: 1,
		flexDirection: 'row',
		borderWidth: '0.5em',
		borderColor: 'white',
		boxShadow: '10px 10px 10px black',
		overflow: 'hidden',
	},

	centerImage: {
		alignSelf: 'center',
		width: '100%',
		height: '100%',
		flex: 1,

		resizeMode: 'cover',
	},
	gallery: {
		marginTop: '1em',
		alignSelf: 'center',
		width: '95vw',
		height: '15vh',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
		// backgroundColor: 'gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.8))',

		// overflow: 'hidden',
	},

	pressable: {
		flexGrow: 1,
		height: '100%',
		width: 'fit-content',
		transition: 'ease ',
		resizeMode: 'contain',
	},
};

export default GalleryStyles;
