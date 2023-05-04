const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        app: "./dev/app.js",
        cv: "./dev/cv.js",
    },
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].min.css",
        }),
        new CopyPlugin({
            patterns: [
              { from: "dist/app.min.css", to: "../assets/css/app.min.css" },
              { from: "dist/app.min.css.map", to: "../assets/css/app.min.css.map" },
              { from: "dist/cv.min.css", to: "../assets/css/cv.min.css" },
              { from: "dist/cv.min.css.map", to: "../assets/css/cv.min.css.map" },
              { from: "dist/app.min.js", to: "../assets/js/app.min.js" },
              { from: "dist/app.min.js.map", to: "../assets/js/app.min.js.map" },
            ],
            options: {
              concurrency: 100,
            },
        }),
    ],
    devtool: 'source-map',
    watchOptions: {
        ignored: /node_modules/
    },
};