const { Router } = require('express');
const { phonesControllers } = require('../controllers');
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

module.exports = phonesRouter;
