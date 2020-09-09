const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = (mode) => {
  return {
    mode,
    entry: "./index.js",
    module: {
      rules: [
        {
          test: /worker\.js/,
          loader: "worker-loader",
          options: { filename: "[name]-bundle.js" },
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
