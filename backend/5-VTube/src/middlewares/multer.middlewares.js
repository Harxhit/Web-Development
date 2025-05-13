import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Destination folder for temporary storage
const tempDir = path.resolve('./public/temp');
fs.mkdirSync(tempDir, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log('Uploading file to:', tempDir);
    cb(null, tempDir);
  },
  filename: function (req, file, cb) {
    const finalName = file.originalname; // Keep original name if this is not done cloudinary started behaving like you know
    console.log('Saved with original filename:', finalName);
    cb(null, finalName);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    console.log('File details:');
    // console.log('Fieldname:', file.fieldname);
    // console.log('Original name:', file.originalname);
    // console.log('Encoding:', file.encoding);
    // console.log('Mimetype:', file.mimetype);
    cb(null, true);
  },
});

export default upload;
