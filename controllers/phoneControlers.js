const _ = require('lodash');
const createHttpError = require('http-errors');
const { Phone } = require('../models');

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;

  try {
    const createdPhone = await Phone.create(body);
    const preparedPhone = _.omit(createdPhone.get(), [
      'createdAt',
      'updatedAt',
    ]);

    res.status(201).send({ data: preparedPhone });
  } catch (error) {
    next(error);
  }
};

module.exports.getPhones = async (req, res, next) => {
  const {
    query: { page = 1, results = 10 },
  } = req;

  const limit = results;
  const offset = (page - 1) * results;

  try {
    const foundPhones = await Phone.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      limit,
      offset,
      order: ['id'],
      raw: true,
    });
    res.status(200).send({ data: foundPhones });
  } catch (err) {
    next(err);
  }
};

module.exports.getPhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;

  try {
    const foundPhone = await Phone.findByPk(phoneId, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      raw: true,
    });
    if (!foundPhone) {
      return next(createHttpError(404, 'Phone Not Found'));
    }

    res.status(200).send({ data: foundPhone });
  } catch (error) {
    next(error);
  }
};

module.exports.updatePhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
    body,
  } = req;

  try {
    const [, [updatedPhone]] = await Phone.update(body, {
      where: { id: phoneId },
      raw: true,
      returning: true,
    });

    if (!updatedPhone) {
      return next(createHttpError(404, 'Phone Not Found'));
    }

    res.status(200).send({ data: updatedPhone });
  } catch (err) {
    next(err);
  }
};

module.exports.deletePhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;

  try {
    const deletedCount = await Phone.destroy({
      where: { id: phoneId },
    });

    if (deletedCount === 0) {
      return next(createHttpError(404, 'Phone Not Found'));
    }

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports.updateImage = async (req, res, next) => {
  const {
    file,
    params: { phoneId },
  } = req;

  try {
    if (!file) {
      return next(createHttpError(422, 'Image is Required'));
    }

    const [, [updatedPhone]] = await Phone.update(
      {
        image: 'images/' + file.filename,
      },
      {
        where: { id: phoneId },
        returning: true,
        raw: true,
      }
    );

    if (!updatedPhone) {
      return next(createHttpError(404, 'Phone Not Found'));
    }

    const preparedPhone = _.omit(updatedPhone, ['createdAt', 'updatedAt']);

    res.status(200).send({ data: preparedPhone });
  } catch (error) {
    next(error);
  }
};
