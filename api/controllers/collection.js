const Figure = require('../models/figure');
colorArray = [
  'is-dark',
  'is-primary',
  'is-link',
  'is-info',
  'is-success',
  'is-warning',
  'is-danger',
  'is-dark is-light',
  'is-primary is-light',
  'is-link is-light',
  'is-info is-light',
  'is-success is-light',
  'is-warning is-light',
  'is-danger is-light',
];
// Get
module.exports.collections = function (req, res) {
  Figure.find({}, function (err, figures) {
    if (err) {
      return res.status(500).json({
        message: 'Ошибка при извлечении коллекции фигур'
      });
    }
    return res.json(figures);
  });
}
// Create
module.exports.create = [
  function (req, res) {
    const figure = new Figure({
      color: colorArray[Math.floor(Math.random() * colorArray.length)]
    })
    figure.save(function (err, figure) {
      if (err) {
        return res.status(500).json({
          message: 'Произошла ошибка при сохранении записи',
          error: err
        });
      }
      Figure.find({}, function (err, figures) {
        if (err) {
          return res.status(500).json({
            message: 'Ошибка при извлечении коллекции фигур'
          });
        }
        return res.json(figures);
      });
    })
  }
]
// Update
module.exports.update = [
  function (req, res) {
    const id = req.body.id;
    Figure.findOne({ _id: id }, function (err, figure) {
      if (err) {
        return res.status(500).json({
          message: 'Произошла ошибка поиска нужной фигруы',
          error: err
        });
      }
      if (!figure) {
        return res.status(404).json({
          message: 'Нужной фигуры не найдено'
        });
      }

      const cArr = colorArray.filter(color => color !== figure.color);
      figure.color = cArr[Math.floor(Math.random() * cArr.length)]

      figure.save(function (err, fig) {
        if (err) {
          return res.status(500).json({
            message: 'Произошла ошибка записи',
            error: err
          });
        }
        Figure.find({}, function (err, figures) {
          if (err) {
            return res.status(500).json({
              message: 'Ошибка при извлечении коллекции фигур'
            });
          }
          return res.json(figures);
        });
      });
    });
  }
]
// Delete
module.exports.delete = [
  function (req, res) {
    const id = req.body.id;
    Figure.findByIdAndRemove(id, function (err, figure) {
      if (err) {
        return res.status(500).json({
          message: 'Произошла ошибка при удалении записи.'
        });
      }
      Figure.find({}, function (err, figures) {
        if (err) {
          return res.status(500).json({
            message: 'Ошибка при извлечении коллекции фигур'
          });
        }
        return res.json(figures);
      });
    });
  }
]