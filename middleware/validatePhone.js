const { body, validationResult } = require('express-validator');

const validatePhone = [
  body('brand').notEmpty().withMessage('Brand is required'),
  body('model').notEmpty().withMessage('Model is required'),
  body('price')
    .isDecimal({ min: 0 })
    .withMessage('Price must be a positive number'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validatePhone };
