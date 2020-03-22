const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const path = require("path");

module.exports = function(env, argv) {
	return {
		mode: "production",
		entry: ["./src/js/index.js"],
		// optimization: {
		// 	minimizer: [new OptimizeCSSAssetsPlugin()]
		// },
		plugins: [
			new HtmlWebpackPlugin({
				title: "Mountain Sky Goldens",
				template: path.resolve("./src/index.html")
			})
			// new MiniCssExtractPlugin({
			// 	filename: "[name].css",
			// 	chunkFilename: "[id].css"
			// }),
			// new MinifyPlugin()
		],

		output: {
			path: path.resolve(__dirname + "/dist"),
			filename: "bundle.js",
			publicPath: "/"
		},
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: [
						//MiniCssExtractPlugin.loader,
						"css-loader",
						"sass-loader"
					]
				},
				{
					test: /\.css$/,
					use: ["style-loader", "css-loader"]
				},
				{
					test: /\.(eot|woff|otf|woff2|ttf)(\?\S*)?$/,
					use: [
						{
							loader: "file-loader",
							options: {
								outputPath: "./fonts",
								name: "[name].[ext]"
							}
						}
					]
				},
				{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"]
						}
					}
				},
				{
					test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
					use: [
						{
							loader: "file-loader",
							options: {
								outputPath: "./img",
								name: "[name].[ext]"
							}
						}
						// {
						// 	loader: "image-webpack-loader",
						// 	options: {
						// 		mozjpeg: {
						// 			progressive: false,
						// 			quality: 45
						// 		},
						// 		// optipng.enabled: false will disable optipng
						// 		optipng: {
						// 			enabled: true
						// 		},
						// 		pngquant: {
						// 			quality: "65-90",
						// 			speed: 4
						// 		},
						// 		gifsicle: {
						// 			interlaced: true,
						// 			optimizationLevel: 3
						// 		},
						// 		// the webp option will enable WEBP
						// 		webp: {
						// 			quality: 20
						// 		}
						// 	}
						// }
					]
				},
				{
					test: /\.html$/,
					use: {
						loader: "html-loader"
					}
				}
			]
		}
	};
};
