const { Router } = require('express');
const { preordersControllers } = require('../controllers');

const preordersRouter = Router();

preordersRouter
  .route('/')
  .post(preordersControllers.createPreorder)
  .get(preordersControllers.getAllPreorders);

preordersRouter
  .route('/:preorderId')
  .get(preordersControllers.getPreorderById)
  .patch(preordersControllers.updatePreorderById)
  .delete(preordersControllers.deletePreorderById);

module.exports = preordersRouter;
