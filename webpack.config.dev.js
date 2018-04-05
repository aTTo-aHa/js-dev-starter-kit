import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web', //node for node apps, electron for electron
  output: { //servers from memory, not actual file created
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
        // create HTML file that includes a ref to bundle js
        new HtmlWebpackPlugin({
          template: 'src/index.html',
          inject: true
        })
  ],
  module: {
    loaders: [ //what file types and how to handle them.
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
