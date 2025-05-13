import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const testStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const destPath = path.join(__dirname, 'uploads');
    console.log('Multer destination function called');
    console.log('Destination path:', destPath);
    console.log('File details:', file);
    cb(null, destPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    const finalFilename = file.fieldname + '-' + uniqueSuffix + fileExtension;
    console.log('Generated filename:', finalFilename);
    cb(null, finalFilename);
  },
});

const testUpload = multer({ storage: testStorage });
const app = express();
// Important:  Add this to handle non-file form fields.  It's often needed with multer.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/test-upload', testUpload.single('testFile'), (req, res) => {
  console.log('Route handler called');
  console.log('Uploaded file:', req.file);
  console.log('Request body:', req.body);
  res.send('File uploaded successfully!');
});

app.listen(3001, () => {
  console.log('Test server listening on port 3001');
});
