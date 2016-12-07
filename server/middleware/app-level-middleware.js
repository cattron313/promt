const webpack = require('webpack');
const webpackValidator = require("webpack-validator");
const webpackMiddleware = require('webpack-dev-middleware');
const path = require('path');
const config = require('../../webpack.config.babel.js')({dev: true});

module.exports = function (app) {
	if (app.get('env') === 'development') {
		app.use(webpackMiddleware(webpack(config), {
			// publicPath is required, whereas all other options are optional

			noInfo: false,
		    // display no info to console (only warnings and errors)

		    quiet: false,
		    // display nothing to the console

		    //lazy: true,
		    // switch into lazy mode
		    // that means no watching, but recompilation on every request

		    watchOptions: {
		    	aggregateTimeout: 300,
		    	poll: true
		    },
		    // watch options (only lazy: false)

		    publicPath: config.output.publicPath,
		    // public path to bind the middleware to
		    // use the same as in webpack

		    index: "index.html",
		    // the index path for web server

		    //headers: { "X-Custom-Header": "yes" },
		    // custom headers

		    filename: "bundle.js",

		    stats: {
		    	colors: true
		    },
		    // options for formating the statistics

		    reporter: null,
		    // Provide a custom reporter to change the way how logs are shown.

		    serverSideRender: false,
		    // Turn off the server-side rendering mode. See Server-Side Rendering part for more info.
		}));
	} else if (app.get('env') === 'production') {
		app.use(express.static(path.join(__dirname, 'client')));
	}
}