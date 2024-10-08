const path = require("path");

module.exports = {
  publicPath: "/",
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.resolve(__dirname, "src"));
    // 在這裡添加其他的別名
    // 例如：.set('@components', path.resolve(__dirname, 'src/components'))
  },
};
