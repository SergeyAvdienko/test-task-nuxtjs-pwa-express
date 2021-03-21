const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Произошла ошибка подключения к базе данных!!!!!!!!!!!!:'));
db.once('open', function callback() {
  console.log("Подключение к базе данных произошлоо успешно...");
});

module.exports = db