const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const spawn = require("child_process").spawn;
const fs = require('fs');
const app =express();

app.use(cors());
app.use(fileUpload());

app.post('/upload', function(req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  let image = req.files.img;
  const imagePath = "C:/Users/Utkarsh/Desktop/BTP_backend/saved_image/"  + image.name

  image.mv(imagePath, function(err) {
    if (err)
      return res.status(500).send(err);
  });

  const pythonProcess = spawn('py',["C:/Users/Utkarsh/Desktop/BTP_backend/python/pyScript.py", imagePath, image.name]);

	pythonProcess.stdout.on('data', (data) => {
		res.send(data.toString())
	});
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is up on port ${PORT}`));