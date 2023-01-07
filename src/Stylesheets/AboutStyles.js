const AboutStyles = {
	container: {
		marginTop: '15vh',
		height: 'fit-content',
		width: '100vw',
		flexDirection: 'column',
	},

	title: {
		fontSize: '30px',
		marginHorizontal: 'auto',
		marginVertical: '2%',
		// color: '#A3249B',
	},

	opaque: { backgroundColor: '#F2AA4F' },
	section: {
		position: 'relative',
		flexDirection: 'row',
		height: '100vh',
		width: '100vw',
		alignItems: 'center',
		justifyContent: 'space-around',
		// paddingVertical: '20%',
		backgroundColor: 'rgba(244,244,244,0.3)',
	},

	nestedImage: {
		height: '30vh',
		width: '30vw',
		boxShadow: '10px 10px 10px black',
	},
	p: {
		marginLeft: '5vw',
		fontSize: '16px',
		width: '500px',
		maxWidth: '90vw',
	},
};

export default AboutStyles;
