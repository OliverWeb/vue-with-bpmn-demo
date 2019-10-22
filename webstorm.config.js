const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  assetsPublicPath: "./",
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  // lintOnSave: process.env.NODE_ENV === 'development',
  lintOnSave: true,
  productionSourceMap: false,
  resolve: {
    alias: {
      "@": resolve("src"),
      "@component": path.join(__dirname, "./src/components"),
      "@bpmn": path.join(__dirname, "./src/components/bpmn"),
      "@index": path.join(__dirname, "./src/pages/index")
    }
  }
};
