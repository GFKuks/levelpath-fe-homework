const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "src", "index.tsx"),
    // Must handle extensions specifically, otherwise editor gets confused on smth like ./App
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"] 
    },
    module: {
        rules: [
            // Babel loader for ES2015+ and React javascript
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            // Typescript loader
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            // Css loader
            {
                test: /\.css?$/,
                use: [
                    "style-loader",
                    "css-loader"
                ],
                exclude: /node_modules/,
            },
        ]
    },
    devServer: {
        static: path.resolve(__dirname, "./dist"),
        historyApiFallback: true,
        port: 9000,
        hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
      }),
    ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
}