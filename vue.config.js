const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: isProd ? '/リポジトリ名' : 'https://github.com/Shoya-Osada/account-book.git',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false
}