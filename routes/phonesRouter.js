const { Router } = require('express');
const { phonesControllers, preordersControllers } = require('../controllers');
const { validatePhone } = require('./../middleware/validatePhone');

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

module.exports = phonesRouter;
