const ImageStyles = {
	basicImage: { flex: 1, height: '100%', width: '100%' },
	shrunk: { flex: 1, height: '100%', width: '100%' },
	expanded: { flex: 1, height: '100%', width: '100%' },
	centerImage: {
		alignSelf: 'center',
		// left: '40%',
		// top: '40%',
		flex: 1,
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
	smallLeft: {
		position: 'absolute',
		left: '12%',
		top: '3%',
		width: '20%',
		height: '15%',
	},
	tallLeft: {
		position: 'absolute',
		left: '15%',
		top: '30%',
		width: '15%',
		height: '33%',
	},
	shortLeft: {
		position: 'absolute',
		left: '25%',
		top: '73%',
		width: '33%',
		height: '15%',
	},
	smallRight: {
		position: 'absolute',
		left: '84%',
		top: '16%',
		width: '20%',
		height: '15%',
	},
	tallRight: {
		position: 'absolute',
		left: '75%',
		top: '30%',
		width: '15%',
		height: '33%',
	},
	shortRight: {
		position: 'absolute',
		left: '66%',
		top: '70%',
		width: '33%',
		height: '15%',
	},
};

export default ImageStyles;
