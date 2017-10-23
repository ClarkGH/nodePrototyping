module.exports = options => {
  return {
    entry: './components/index.js',
    output: {
      path: __dirname,
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true
              },
            },
          ],
        },
      ],
    },
  }
}