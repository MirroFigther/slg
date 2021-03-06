var path=require("path");
var webpack=require("webpack");
var HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
  devtool:'cheap-eval-source-map',
  entry:["webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/dev-server",
    "./main.js"
  ],
  output:{
    path:path.join(__dirname,"dist"),
    filename:"bundle.js"
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template:"./index.html"
    })
  ],
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
    }, {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  },
  devServer:{
    contentBase:'./dist',
    hot:true
  }
}
