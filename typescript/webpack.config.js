var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/darken_color.ts",
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.typescript.js",
    library: 'DarkenColor',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    }],
  },
}