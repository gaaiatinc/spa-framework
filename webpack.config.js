const resolve = require("path").resolve;
const webpack = require("webpack");

var libraryName = "SPAFramework";
var outputFile = libraryName + ".js";

module.exports = {
    // configuration
    name: "jsx bundling",
    entry: {
        libFacade: resolve(__dirname, "./libraryFacade")
    },
    output: {
        path: resolve(__dirname),
        filename: outputFile,
        library: libraryName,
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    context: resolve(__dirname),

    externals: {
        //don"t bundle the following npm module packages within our bundle page.js
        //but get them from global variables
        "react": "React",
        "react-dom": "ReactDOM",
        "react-dom/server": "ReactDOMServer"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["env", "react"]
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new webpack.optimize.UglifyJsPlugin({comments: false, mangle: true, compress: false})
    ]
};
// config
//     .plugins
//     .push(new webpack.optimize.UglifyJsPlugin({
//         compressor: {
//             screw_ie8: true,
//             warnings: false
//         }
//     }));
