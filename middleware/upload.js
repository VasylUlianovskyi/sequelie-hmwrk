const path = require('node:path');
const multer = require('multer');
const createHttpError = require('http-errors');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.env.STATIC_FOLDER, 'images'));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

function fileFilter (req, file, cb) {
  const MIMETYPE_REG_EXP = /^image\/(gif|png|jpeg|jpg)$/;

  if (MIMETYPE_REG_EXP.test(file.mimetype)) {
    return cb(null, true);
  }

  cb(createHttpError(415, 'Support only jpeg/png/gif/jpg mimetypes'));
}

const upload = multer({ storage, fileFilter });

module.exports.uploadPhonePhoto = upload.single('phonePhoto');
