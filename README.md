# hexo-renderer-webpack-2

Add Hexo support for Webpack(v2).

Fork from the original hexo-renderer-webpack repository: https://github.com/briangonzalez/hexo-renderer-webpack

## Install

``` bash
$ npm install --save hexo-renderer-webpack-2
```

## Options

You can configure this plugin in `_config.yml` or your theme's `_config.yml`.

If you want to use some presets, you will need to install and set presets value.

```
$ npm install --save-dev babel-core babel-loader babel-preset-es2015
```

add `webpack.config.js` to the project root
``` js
module.exports = {
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

## Links

- Hexo: https://hexo.io/
- Webpack: http://webpack.github.io/
