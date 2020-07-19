const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withLess = require("@zeit/next-less");
if (typeof require !== "undefined") {
  require.extensions[".less"] = file => {};
}

module.exports = withCSS({
  arget: "serverless",
  transformManifest: manifest => ["/"].concat(manifest),
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"
  },
  ...withLess(
    withSass({
      lessLoaderOptions: {
        javascriptEnabled: true
      }
    })
  )
});
