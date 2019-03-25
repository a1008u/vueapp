const path = require('path')
const rootPath = path.resolve(__dirname, '../src')

// module.exports = (baseConfig, env, defaultConfig) => {
//   // defaultConfig.module.rules.push({
//   //   test: /\.(scss|css)$/,
//   //   loaders: ["style-loader", "css-loader", "sass-loader"],
//   //   include: rootPath
//   // })

//   // storybookでも@や~を利用できるようにする。
//   defaultConfig.resolve.alias['@'] = rootPath
//   defaultConfig.resolve.alias['~'] = rootPath

//   defaultConfig.module.rules.push({
//     test: /\.vue$/,
//     loader: 'vue-loader',
//   });
//   defaultConfig.plugins.push(new VueLoaderPlugin());

//   return defaultConfig;
// }

module.exports = {
  module: {
    rules: [
      {
        test: /\.(vue|css)$/,
        loaders: ['vue-style-loader','css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      // vue: 'vue/dist/vue.esm.js',
      'vue$': 'vue/dist/vue.esm.js',
      '@': rootPath
    }
  }
}