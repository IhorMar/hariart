module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: ["babel-loader", "source-map-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
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
