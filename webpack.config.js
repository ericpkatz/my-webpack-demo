var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js', 
    path: path.join(__dirname, 'dist')
  }
}
