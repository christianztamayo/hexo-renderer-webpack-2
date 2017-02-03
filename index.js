var _ = require('lodash');
var webpack = require('webpack');
var extend = require('util')._extend;
var os = require('os');
var path = require('path');
var MemoryFileSystem = require('memory-fs');
var memoryFs = new MemoryFileSystem();
var fs = require('fs');
var TMP_PATH = os.tmpdir();

var renderer = function(data, options, callback) {
  var webpackConfigFileName = hexo.theme.config.webpack_config || hexo.config.webpack_config || 'webpack.config.js';
  var webpackConfigFile = require(path.resolve(webpackConfigFileName));
  var webpackConfig = _.isFunction(webpackConfigFile) ? webpackConfigFile(data) : webpackConfigFile;

  var config = extend(webpackConfig, {
    entry: data.path,
    output: {
      path: TMP_PATH,
      filename: path.basename(data.path)
    }
  });

  var outputPath = path.join(config.output.path, config.output.filename);

  //
  // Setup compiler to use in-memory file system then run it.
  //
  var compiler = webpack(config);
  compiler.outputFileSystem = memoryFs;

  compiler.run(function(err, stats) {

    if (stats.toJson().errors.length > 0) {
      hexo.log.log(stats.toString());
      return callback(stats.toJson().errors, 'Webpack Error.');
    }

    var contents = memoryFs.readFileSync(outputPath).toString();
    return callback(null, contents);
  });

};

hexo.extend.renderer.register('js', 'js', renderer);
