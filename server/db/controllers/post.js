const mongoose = require("mongoose");
const Model = mongoose.model("post");

module.exports.getArticles = function(req, res) {
  Model.find()
    .then(items => {
      res.status(200).json({ posts: items });
    })
    .catch(err => {
      res.status(500).json({
        status: "При чтении записей произошла ошибка: " + err
      });
    });
};

module.exports.createArticle = function(req, res) {
  // создаем новую запись блога и передаем в нее поля из формы
  let item = new Model({
    title: req.body.title,
    date: new Date(),
    body: req.body.text
  });
  // сохраняем запись в базе
  item
    .save()
    .then(item => {
      return res.status(200).json({ status: "Запись успешно добавлена" });
    })
    .catch(err => {
      // обрабатываем  и отправляем
      res.status(500).json({
        status: "При добавление записи произошла ошибка: " + err
      });
    });
};

module.exports.updateArticle = function(req, res) {
  const id = req.params.id;

  let data = {
    title: req.body.title,
    date: new Date(req.body.date),
    body: req.body.text
  };

  const Model = mongoose.model("post");

  Model.findByIdAndUpdate(id, { $set: data })
    .then(item => {
      if (item) {
        res.status(200).json({ status: "Запись успешно обновлена" });
      } else {
        res.status(404).json({ status: "Запись в БД не обнаружена" });
      }
    })
    .catch(err => {
      res.status(404).json({
        status: "При обновлении записи произошла ошибка: " + err
      });
    });
};

module.exports.deleteArticle = function(req, res) {
  const id = req.params.id;
  const Model = mongoose.model("post");

  Model.findByIdAndRemove(id).then(
    item => {
      if (item) {
        res.status(200).json({ status: "Запись успешно удалена" });
      } else {
        res.status(404).json({ status: "Запись в БД не обнаружена" });
      }
    },
    err => {
      res.status(500).json({
        status: "При удалении записи произошла ошибка: " + err
      });
    }
  );
};
