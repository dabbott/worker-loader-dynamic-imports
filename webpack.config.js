const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = (mode) => {
  return {
    mode,
    entry: "./index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /worker\.js/,
          loader: "worker-loader",
        },
      ],
    },
    plugins: [
      new BundleAnalyzerPlugin({
        generateStatsFile: true,
        openAnalyzer: true,
      }),
    ],
  };
};
