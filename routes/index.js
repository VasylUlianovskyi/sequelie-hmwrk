const { Router } = require('express');
const phonesRouter = require('./phonesRouter');
const preordersRouter = require('./preorderRoutes');

const router = Router();

router.use('/phones', phonesRouter);
router.use('/preorders', preordersRouter);

module.exports = router;
