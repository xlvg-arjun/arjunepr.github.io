exports.awaitWriteFinish = true;

exports.files = {
	javascripts: {
		joinTo: {
			'vendor.js': /^(?!app)/
		},
	},
	stylesheets: {joinTo: 'style.css'}
};


exports.plugins = {
	autoReload: {
		enabled: {
			css: true,
			js: true,
			assets: true
		}
	}
};