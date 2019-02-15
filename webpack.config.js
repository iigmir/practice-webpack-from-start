const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        filename: "bundle.js",
        path: path.resolve(__dirname, "docs")
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        },{
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    }
};