// webpack.config.js
module.exports = {
  // Other webpack configuration options
  module: {
    rules: [
      {
        test: /\.(mp3)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              // outputPath: "./assets",
            },
          },
        ],
      },
    ],
  },
};
