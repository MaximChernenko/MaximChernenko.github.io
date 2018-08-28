const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"], //точко входа
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js"
  }, //куда выбросить
  module: {
    rules: [
      //загрузчики
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"] //для транспайлинга кода
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader" //css загрузчик
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: ["file-loader"] //загрузчик для картинок
      },
      {
        test: /\.hbs$/,
        exclude: /node_modules/,
        use: ["handlebars-loader"] //загрузчик для шаблонов
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "./public/index.html", //откуда берем шаблон html
      filename: "index.html" //куда выбрасываем результат
    }),
    new MiniCssExtractPlugin({
      filename: "css/styles.css" //куда выбросить css
    }),
    new CleanWebpackPlugin("build") //очистка папки build при каждой сборке проекта
  ]
};
