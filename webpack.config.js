const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    //entry file
    entry: "./index.js",
    output: {
        // output dir
        path: path.resolve(__dirname, 'dist'),
        // bundled file
        filename: "bundle.js"
    },
    devServer: {
        // path to run server
        contentBase: path.join(process.cwd(), 'dist'),
        compress: true,
        port: 3000
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './index.html'
    })]
}