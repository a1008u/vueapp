const path = require('path')
const rootPath = path.resolve(__dirname, '../src')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = ({ config, mode }) => {
  // config.module.rules.push({
  //   test: /\.(vue|css)$/,
  //   loaders: ["style-loader","css-loader","postcss-loader"],
  //   include: rootPath
  // })

  // config.module.rules.push({
  //   test: /\.(vue)$/,
  //   loader: ["vue-loader"]
  // })

  // config.module.rules.push({
  //   test: /\.vue$|\.js?$/,
  //   exclude: /node_modules/,
  //   use: {
  //     loader: 'babel-loader',
  //     options: {
  //       presets: ['@babel/preset-env'],
  //       plugins: ["@babel/plugin-syntax-dynamic-import"]
  //     }
  //   }
  // })

  // config.module.rules.push({
  //   test: /\.(png|jpg|gif)$/,
  //   use: [
  //     {
  //       loader: 'file-loader',
  //       options: {},
  //     },
  //   ]
  // })

  // storybookでも@や~を利用できるようにする。
  config.resolve.alias['@'] = rootPath
  config.resolve.alias['~'] = rootPath

  return config;
}



// module.exports = {
//   module: {
//     rules: [

//       {
//         test: /\.(vue|css)$/,
//         loaders: ['vue-loader'],
//       },
//       {
//         test: /\.js?$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader'
//       },
//       {
//         test: /\.(css)$/,
//         loaders: ['css-loader'],
//       },
//       {
//         test: /\.(png|jpg|gif)$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {},
//           },
//         ],
//       },
//     ]
//   },
//   resolve: {
//     extensions: ['*', '.js', '.vue', '.json'],
//     alias: {
//       // vue: 'vue/dist/vue.esm.js',
//       'vue$': 'vue/dist/vue.esm.js',
//       // 'vue': 'vue/dist/vue.common.js',
//       '@': rootPath
//     }
//   },
// }

