// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    entryPoints: {
      'app/initialize.js': 'app.js'
    },
    joinTo: {
      'vendor.js': /^(?!app)/
    },
  },
  stylesheets: {
    joinTo: {
      'style.css': /^app/,
    },
  },
};

exports.plugins = {
  babel: {presets: ['latest', 'react']},
  stylus: {
      // modules: true,
      includePaths: ['node_modules'],
      includeCss: true,
  },

  autoReload: {
    enabled: {
      css: true,
      js: true,
      assets: true,
    }
  }
};
