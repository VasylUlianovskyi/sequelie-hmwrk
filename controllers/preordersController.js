const _ = require('lodash');
const createHttpError = require('http-errors');
const { Preorder, Phone } = require('./../models');

module.exports.getAllPreorders = async (req, res, next) => {
  const {
    query: { status },
  } = req;

  const whereClause = {};
  if (status) {
    whereClause.status = status;
  }

  try {
    const foundPreorders = await Preorder.findAll({
      where: whereClause,
      include: [
        {
          model: Phone,
          as: 'phone',
          attributes: ['brand', 'model', 'color'],
        },
      ],
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    res.status(200).send({ data: foundPreorders });
  } catch (error) {
    next(error);
  }
};

module.exports.createPreorder = async (req, res, next) => {
  const { body } = req;

  const phoneId = body.phoneId;

  try {
    const phoneExists = await Phone.findByPk(phoneId);
    if (!phoneExists) {
      return next(createHttpError(404, 'Phone Not Found'));
    }

    const createdPreorder = await Preorder.create(body);
    const preparedPreorder = _.omit(createdPreorder.get(), [
      'createdAt',
      'updatedAt',
    ]);

    res.status(201).send({ data: preparedPreorder });
  } catch (error) {
    next(error);
  }
};

module.exports.getPreorderById = async (req, res, next) => {
  const {
    params: { preorderId },
  } = req;

  try {
    const foundPreorder = await Preorder.findByPk(preorderId, {
      include: [
        {
          model: Phone,
          as: 'phone',
          attributes: ['brand', 'model', 'color'],
        },
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    if (!foundPreorder) {
      return next(createHttpError(404, 'Preorder Not Found'));
    }

    res.status(200).send({ data: foundPreorder });
  } catch (error) {
    next(error);
  }
};

module.exports.updatePreorderById = async (req, res, next) => {
  const {
    params: { preorderId },
    body,
  } = req;

  try {
    const [updatedCount, [updatedPreorder]] = await Preorder.update(body, {
      where: { id: preorderId },
      returning: true,
    });

    if (updatedCount === 0) {
      return next(createHttpError(404, 'Preorder Not Found'));
    }

    const preparedPreorder = _.omit(updatedPreorder.get(), [
      'createdAt',
      'updatedAt',
    ]);

    res.status(200).send({ data: preparedPreorder });
  } catch (error) {
    next(error);
  }
};

module.exports.deletePreorderById = async (req, res, next) => {
  const {
    params: { preorderId },
  } = req;

  try {
    const deletedCount = await Preorder.destroy({
      where: { id: preorderId },
    });

    if (deletedCount === 0) {
      return next(createHttpError(404, 'Preorder Not Found'));
    }

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports.getPreordersByPhoneId = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;

  try {
    const foundPreorders = await Preorder.findAll({
      where: { phoneId },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    res.status(200).send({ data: foundPreorders });
  } catch (error) {
    next(error);
  }
};

module.exports.createPreorderForPhone = async (req, res, next) => {
  const {
    params: { phoneId },
    body,
  } = req;

  try {
  
    const foundPhone = await Phone.findByPk(phoneId);
    if (!foundPhone) {
      return next(createHttpError(404, 'Phone Not Found'));
    }

    
    const createdPreorder = await foundPhone.createPreorder(body);


    const preparedPreorder = {
      ...createdPreorder.get(),
      phoneId,  
    };


    res.status(201).send({ data: preparedPreorder });
  } catch (error) {
    next(error);
  }
};