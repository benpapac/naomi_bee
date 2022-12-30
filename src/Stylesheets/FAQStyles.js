const FAQStyles = {
	container: {
		height: '90vh',
		width: '100vw',
		padding: '1em',
		flex: 1,
	},
	title: {
		fontSize: '24px',
		alignSelf: 'center',
	},
	itemView: {
		flex: 1,
		width: '90vw',
		padding: '0.3em',
	},

	odd: {backgroundColor: 'gray'},
	even: {backgroundColor: 'white'},
	itemQ: {
		flex: 1,
		fontSize: '20px',
		color: 'darkgray',
	},
	itemA: {
		minHeight: '20px',
		width: '90vw',
	},
	false: {
		display: 'none',
		animation: 'slideup 1s',
	},

	true: {
		flex: 1,
		fontSize: '18px',
		animation: 'slidedown 1s',
	},
};

export default FAQStyles;
