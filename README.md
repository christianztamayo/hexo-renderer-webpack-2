# hexo-renderer-webpack-2-advanced

Add Hexo support for Webpack(v2).

Fork from the original hexo-renderer-webpack repository: https://github.com/briangonzalez/hexo-renderer-webpack

## Install

``` bash
$ npm install --save hexo-renderer-webpack-2-advanced
```

## Options

Add `webpack.config.js` to the project root
``` js
module.exports = {
  entry: [
    'themes/default/source/js/index.js',
    'themes/default/source/js/page.js',
  ],
  module: {
    loaders: [{
      test: /\.js/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: [
          ['es2015', {
            modules: false,
            loose: true
          }]
        ]
      }
    }]
  }
};
```

or specify the file path in config

``` yaml
webpack_config: 'themes/my-theme/webpack.config.js'
```

Only files added to `entry` will be transpiled with the webpack

## Links

- Hexo: https://hexo.io/
- Webpack: http://webpack.github.io/
