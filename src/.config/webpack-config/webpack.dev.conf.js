/**
 * Created by zhengqiguang on 2017/2/6.
 */
var merge = require("webpack-merge"),
    baseConf = require("./webpack.base.conf");

module.exports = merge(baseConf, {
    output: {
        filename: "[hash].[name].js"
    },
    devtool: "source-map",
    plugins: []
});
