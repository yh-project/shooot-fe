import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production',
  optimization: {
    minimize: true,
  },
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      //   {
      //     test: /\.vanilla\.css$/i,
      //     use: [
      //       MiniCssExtractPlugin.loader,
      //       {
      //         loader: require.resolve('css-loader'),
      //         options: {
      //           url: false,
      //         },
      //       },
      //     ],
      //   },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new VanillaExtractPlugin(),
    // new MiniCssExtractPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
    hot: true,
  },
};
