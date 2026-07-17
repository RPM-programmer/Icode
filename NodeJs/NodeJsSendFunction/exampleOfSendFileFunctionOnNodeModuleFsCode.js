function sendFile(filePath, response) {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.json': 'application/json'
  };

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (error, data) => {
    if (error) {
      if (error.code === 'ENOENT') {
        response.status(404).send("Ресурс не найден!");
      } else {
        console.error(`Ошибка чтения файла ${filePath}:`, error);
        response.status(500).send("Внутренняя ошибка сервера");
      }
      return;
    }
    response.setHeader('Content-Type', contentType);
    response.send(data);
  });
}