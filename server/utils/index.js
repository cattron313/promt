module.exports = {
	getStaticFilePath(){
		switch (process.env.NODE_ENV) {
			case 'production':
				var appStaticFilePath = 'build';
				break;
			default:
				var appStaticFilePath = 'server/public/assets';
				break;
		}
		console.log('PATH:'+appStaticFilePath);
		return appStaticFilePath;
	},
};