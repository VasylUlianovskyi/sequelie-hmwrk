const { Router } = require('express');
const multer = require('multer');
const { phonesControllers, preordersControllers } = require('../controllers');
const { validatePhone } = require('./../middleware/validatePhone');

const upload = multer({ dest: 'public/images' });

const phonesRouter = Router();

phonesRouter
  .route('/')
  .post(validatePhone, phonesControllers.createPhone)
  .get(phonesControllers.getPhones);

phonesRouter
  .route('/:phoneId')
  .get(phonesControllers.getPhoneById)
  .patch(validatePhone, phonesControllers.updatePhoneById)
  .delete(phonesControllers.deletePhoneById);

phonesRouter.get(
  '/:phoneId/preorders',
  preordersControllers.getPreordersByPhoneId
);

phonesRouter.post(
  '/:phoneId/preorders',
  preordersControllers.createPreorderForPhone
);

phonesRouter.patch(
  '/:phoneId/images',
  upload.single('phonePhoto'),
  phonesControllers.updateImage
);

module.exports = phonesRouter;
