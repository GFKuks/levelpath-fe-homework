const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "src", "index.tsx"),
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            "store": path.resolve(__dirname, "src/store/"),
        }
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
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css?$/,
                use: [
                    "style-loader",
                    "css-loader"
                ],
                exclude: /node_modules/,
            },
            {
              test: /\.js$/,
              enforce: "pre",
              use: ["source-map-loader"],
            },
        ]
    },
    devServer: {
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
        publicPath: "/",
    },
}