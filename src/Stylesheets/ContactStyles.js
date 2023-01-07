const ContactStyles = {
	container: {
		height: '100vh',
		width: '100vw',
	},
	form: {
		alignSelf: 'center',
		height: '80vh',
		width: 'fit-content',
		padding: '2em',
		maxWidth: '95vw',
		flexDirection: 'column',
		marginTop: 'auto',
		alignItems: 'start',
		justifyContent: 'center',
		backgroundColor: 'rgba(217, 47, 84,0.3)', // #D92F54
	},

	title: {
		fontSize: '30px',
		marginVertical: '1em',
	},
	input: {
		width: '30vw',
		maxWidth: '300px',
		marginVertical: '0.5em',
		backgroundColor: 'white',

		borderColor: 'black',
		borderWidth: '1px',
		borderRadius: '1em',
		padding: '0.3em',
	},

	textArea: {
		marginVertical: '1em',
		width: '60vw',
		maxWidth: '600px',
		height: '300px',
		backgroundColor: 'white',
		borderColor: 'black',
		borderWidth: '1px',
		borderRadius: '1em',
	},

	button: {
		height: '100px',
		width: '60%',
		maxWidth: '300px',
	},
};

export default ContactStyles;
