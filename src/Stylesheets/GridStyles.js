const GridStyles = {
	grid: {
		flex: 1,
		// marginHorizontal: 'auto',
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
		padding: '1em',
		alignSelf: 'end',
	},
	row: { flexDirection: 'row', height: 200 },
	'1col': {
		// backgroundColor: 'lightblue',
		borderColor: '#fff',
		borderWidth: 1,
		flex: 1,
		flexDirection: 'row',
	},
	'2col': {
		// backgroundColor: 'aliceblue',
		borderColor: '#fff',
		borderWidth: 1,
		flex: 2,
		flexDirection: 'row',
	},
	'3col': {
		// backgroundColor: 'brown',
		borderColor: '#fff',
		borderWidth: 1,
		flex: 3,
		flexDirection: 'row',
	},
	emptycol: { flex: 1 },
};

export default GridStyles;
