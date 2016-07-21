//var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

/* ----------------------------------------------
 Delete all development code like console.log
---------------------------------------------- */ 
/*var stripLoader = {
 test: [/\.js$/, /\.ts$/ ],
 exclude: /node_modules/,
 loader: WebpackStrip.loader('console.log')
};
devConfig.module.preloaders.push(stripLoader);
*/

/* ----------------------------------------------
 Set devtool in this production config
---------------------------------------------- */ 
devConfig.devtool = 'cheap-module-source-map';
devConfig.debug = false;


/* ----------------------------------------------
 Set process var ENV to production
 See main.ts for usage
---------------------------------------------- */ 
 var prodDefiner = new devConfig.webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
});
devConfig.plugins.push(prodDefiner);
devConfig.plugins.push(new devConfig.webpack.optimize.DedupePlugin());

devConfig.plugins.push(new devConfig.webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      compress: {
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        screw_ie8: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        warnings: false
      },
      mangle: {
        except: ['$super', '$', 'exports', 'require', 'import']
      },
      output: {
        comments: false
      } 
    })
 );


/* ----------------------------------------------
 Export this extended devconfig as 
 our production config 
---------------------------------------------- */ 
module.exports = devConfig;