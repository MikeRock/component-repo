import webpack from "webpack";
import path from "path";
import GitRevisionPlugin from "git-revision-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
//import ChunkManifestPlugin from '@codemotion/chunk-manifest-webpack-plugin'
import ExtractTextPlugin from "extract-text-webpack-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";
import autoprefixer from "autoprefixer";
import ManifestPlugin from 'webpack-manifest-plugin'

const config = {
  entry: {
    bundle: "./src/index.js",
    vendor: ["babel-polyfill", "react"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /worker.jsx?$/,
        use: {loader: 'worker-loader', options: {
          name: 'worker.js'
        }},
        exclude: /node_modules/
      },
      {
        test: /[^global]\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: false,
                modules: true,
                importLoaders: 1,
                localIdentName: "[name]_[local]_[hash:base64:5]"
              }
            },
            "sass-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [
                  autoprefixer({
                    browsers: ["last 15 versions"]
                  })
                ]
              }
            }
          ]
        }),
        exclude: /node_modules/
      },
      {
        test: /_global\.s?css/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: true,
                modules: true,
                importLoaders: 1,
                localIdentName: "[local]"
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [
                  autoprefixer({
                    browsers: ["last 15 versions"]
                  })
                ]
              }
            }
          ]
        }),
        exclude: /node_modules/
      },
      {
        test: /\.(jpeg|png|gif)$/,
        use: {
          loader: "url-loader",
          options: { limit: 8000 }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin("build"),
    new webpack.ProvidePlugin({
      React: "react"
    }),
    new webpack.ContextReplacementPlugin(),
    new webpack.BannerPlugin({
      banner: `CHUNK [name]`
    }),
    new webpack.NamedChunksPlugin(chunk => {
      if (chunk.name) return chunk.name;
      return chunk
        .mapModules(module => {
          if (/html-webpack-plugin/.test(module.userRequest))
            return "html-webpack-plugin";
          return path
            .relative(module.context, module.userRequest)
            .replace(".js", "");
        })
        .reduce(
          (acc, module) =>
            acc.length <= 3
              ? (() => {
                  acc.push(module);
                  return acc;
                })()
              : acc,
          []
        )
        .join("-");
    }),
    new webpack.NamedModulesPlugin(),
    /*  new ChunkManifestPlugin({
            filename: 'manifest.json',
            manifestVariable: 'webpackManifest',
            inlineManifest: true
        }),*/
    new HtmlWebpackPlugin({
      template: "src/index.html",
      // filename: 'index_no_manifest.html',
      filename: "index.html",
      //injectManifest: false
      injectManifest: true
    }),
    new ExtractTextPlugin({
      filename: "style.css",
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity,
      filename: "[name].js"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      async: "[name].[chunkhash].js"
    }),
    new ManifestPlugin()
  ]
};

export default config;
