module.exports = {

    // debug: true,
    // devtool: 'eval',

    context: __dirname ,

    entry: ['bootstrap-loader', "./src/app"],


    output: {
        path: './../server/static/',
        filename: "[name].js",
        library: "[name]"
    },

    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['babel-preset-es2015', 'react']
            }
        },
        {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        },
        {test: /\.png$/, loader: "url-loader?name=fonts/[hash].[ext]&limit=10000&minetype=image/png"},
        {
            test: /\.woff$/,
            loader: "url-loader?name=fonts/[hash].[ext]&limit=10000&minetype=application/font-woff"
        },
        {
            test: /\.woff2$/,
            loader: "url-loader?name=fonts/[hash].[ext]&limit=10000&minetype=application/font-woff"
        },
        {test: /\.ttf$/, loader: "file-loader?name=fonts/[hash].[ext]"},
        {test: /\.eot$/, loader: "file-loader?name=fonts/[hash].[ext]"},
        {test: /\.svg$/, loader: "file-loader?name=fonts/[hash].[ext]"},
        {test: /\.(jpg|png)$/, loader: 'file-loader?name=[path][name].[hash].[ext]'}]
    },

    plugins: [
    ]
};

