module.exports = {
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: ["babel-loader", "source-map-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        resolve: {
          extensions: ["*", ".js", ".jsx", ".json", ".css"],
          symlinks: false,
          cacheWithContext: false,
        },
      },
    ],
  },
};
