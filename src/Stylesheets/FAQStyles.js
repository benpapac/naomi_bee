const FAQStyles = {
	container: {
		height: '100vh',
		width: '100vw',
		padding: '1em',
		paddingTop: '15vh',
		flex: 1,
	},
	title: {
		height: '10vh',
		fontSize: '24px',
		alignSelf: 'center',
	},
	itemView: {
		flex: 1,
		width: '90vw',
		padding: '0.3em',
	},

	odd: { backgroundColor: 'white' },
	even: { backgroundColor: 'gray' },
	itemQ: {
		flex: 1,
		fontSize: '20px',
		color: '#D92F54',
	},
	itemA: {
		minHeight: '20px',
		width: '90vw',
	},
	false: {
		display: 'none',
		animation: 'slideup 1s',
		transition: 'ease 1s',
	},

	true: {
		flex: 1,
		fontSize: '18px',
		animation: 'slidedown 1s',
		color: '#A3249B',
	},
};

export default FAQStyles;
