const path = require('path')
const rootPath = path.resolve(__dirname, '../src')

module.exports = (baseConfig, env, defaultConfig) => {
  // defaultConfig.module.rules.push({
  //   test: /\.(scss|css)$/,
  //   loaders: ["style-loader", "css-loader", "sass-loader"],
  //   include: rootPath
  // })

  // storybookでも@や~を利用できるようにする。
  defaultConfig.resolve.alias['@'] = rootPath
  defaultConfig.resolve.alias['~'] = rootPath

  return defaultConfig;
}