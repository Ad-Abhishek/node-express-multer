const express = require('express');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../uploads/'); // Specify the upload directory
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

app.use(bodyParser.json());

app.use(cors());

app.post('/upload', upload.single('file'), (req, res) => {
  // Access uploaded file information via req.file
  res.json({ message: 'File uploaded successfully' });
});

app.listen(5000, (req, res) => {
  console.log('Server listening on port 5000');
});
