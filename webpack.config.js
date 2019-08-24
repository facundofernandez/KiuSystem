const {
    join
} = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    mode: process.env.NODE_ENV  ? process.env.NODE_ENV : 'development',
    entry: {
        app:'./src/App.js',
    },
    output: {
        path: join(__dirname, 'public', 'dist'),
        filename: "[name].js",
        chunkFilename: '[name].bundle.js',
    },
    module: {
        rules: [{
                test: /\.(js)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    // Separo en archivos los distintos script
    optimization:{
        splitChunks: {
            cacheGroups: {
                commons: { test: /[\\/]node_modules[\\/]((?!react).*[\\/])/, name: 'commons', chunks: "all" },
                angular: { test: /[\\/]node_modules[\\/]((react).*[\\/])/, name: 'react', chunks: "all" }
            }
        }
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    // Servidor dev
    devServer: {
        contentBase: join(__dirname, 'public'),
        compress: true,
        port: 9000
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/style.css'
        })
    ]
}

module.exports = config;