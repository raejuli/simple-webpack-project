import path from "path";
import { Configuration } from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";

const config: Configuration = {
    mode: (process.env.NODE_ENV as "production" | "development" | undefined) ??
        "development",
    entry: "./src/entry.tsx",
    devtool: process.env.NODE_ENV === "development" ? "source-map" : false,
    module: {
        rules: [
            {
                test: /.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "out")
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{from: "src/public"}]
        })
    ],
    watch: true
};

export default config;