const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let isDevelopment = process.env.NODE_ENV !== "production";

console.log(`Running in ${isDevelopment ? "development" : "production"} mode`);

module.exports = {
	mode: isDevelopment ? "development" : "production",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].[fullhash].js",
	},
	devServer: {
		port: 3000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "./index.html",
		}),
		new MiniCssExtractPlugin({
			filename: isDevelopment ? "[name].css" : "[name].[fullhash].css",
			chunkFilename: isDevelopment ? "[id].css" : "[id].[fullhash].css",
		}),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.module\.s(a|c)ss$/,
				use: [
					{
						loader: isDevelopment
							? "style-loader"
							: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
						options: {
							modules: true,
							sourceMap: isDevelopment,
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: isDevelopment,
						},
					},
				],
			},
			{
				test: /\.s(a|c)ss$/,
				exclude: /\.module.(s(a|c)ss)$/,
				use: [
					{
						loader: isDevelopment
							? "style-loader"
							: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: isDevelopment,
						},
					},
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|ico)$/,
				use: ["file-loader"],
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
		],
	},
	resolve: {
		extensions: [".js", ".sass", ".scss"],
	},
};
