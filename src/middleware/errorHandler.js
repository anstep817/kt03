function errorHandler(err, req, res, next) {
  if (err.code === 'P2002') {
    return res.status(400).json({ error: 'Запись с таким значением уже есть' });
  }
  if (err.code === 'P2025') {
    return res.status(404).json({ error: 'Запись не найдена' });
  }
  if (err.code === 'P2003') {
    return res.status(400).json({ error: 'Нет связанной записи' });
  }
  console.log(err);
  res.status(500).json({ error: 'Внутренняя ошибка' });
}

module.exports = errorHandler;
