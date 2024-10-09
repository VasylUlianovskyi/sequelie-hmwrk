const { sequelize, Phone } = require('./models');
const { Op } = require('sequelize');

const phones = [
  {
    brand: 'Apple',
    model: 'iPhone 14',
    os: 'iOS',
    screen_size: 6.1,
    ram: 6,
    storage_capacity: 128,
    battery_capacity: 3279,
    camera_megapixels: 12.5,
    price: 999.99,
    release_date: '2023-09-12',
    color: 'Black',
    is_dual_sim: false,
  },
  {
    brand: 'Samsung',
    model: 'Galaxy S23',
    os: 'Android',
    screen_size: 6.2,
    ram: 8,
    storage_capacity: 256,
    battery_capacity: 3900,
    camera_megapixels: 50,
    price: 799.99,
    release_date: '2023-02-01',
    color: 'Phantom Black',
    is_dual_sim: true,
  },
  {
    brand: 'Google',
    model: 'Pixel 7',
    os: 'Android',
    screen_size: 6.3,
    ram: 8,
    storage_capacity: 128,
    battery_capacity: 4355,
    camera_megapixels: 50,
    price: 599.99,
    release_date: '2022-10-13',
    color: 'Obsidian',
    is_dual_sim: false,
  },
  {
    brand: 'OnePlus',
    model: 'OnePlus 11',
    os: 'Android',
    screen_size: 6.7,
    ram: 8,
    storage_capacity: 128,
    battery_capacity: 5000,
    camera_megapixels: 50,
    price: 699.99,
    release_date: '2023-01-09',
    color: 'Eternal Green',
    is_dual_sim: true,
  },
  {
    brand: 'Xiaomi',
    model: '13 Pro',
    os: 'Android',
    screen_size: 6.73,
    ram: 12,
    storage_capacity: 256,
    battery_capacity: 4820,
    camera_megapixels: 50,
    price: 899.99,
    release_date: '2023-03-01',
    color: 'Ceramic White',
    is_dual_sim: true,
  },
  {
    brand: 'Sony',
    model: 'Xperia 1 IV',
    os: 'Android',
    screen_size: 6.5,
    ram: 12,
    storage_capacity: 256,
    battery_capacity: 5000,
    camera_megapixels: 12,
    price: 1299.99,
    release_date: '2022-05-11',
    color: 'Black',
    is_dual_sim: false,
  },
  {
    brand: 'Nokia',
    model: 'G50',
    os: 'Android',
    screen_size: 6.82,
    ram: 4,
    storage_capacity: 128,
    battery_capacity: 4500,
    camera_megapixels: 48,
    price: 249.99,
    release_date: '2021-09-08',
    color: 'Midnight Sun',
    is_dual_sim: true,
  },
  {
    brand: 'Huawei',
    model: 'P50 Pro',
    os: 'Android',
    screen_size: 6.6,
    ram: 8,
    storage_capacity: 256,
    battery_capacity: 4360,
    camera_megapixels: 50,
    price: 899.99,
    release_date: '2021-10-29',
    color: 'Cocoa Gold',
    is_dual_sim: false,
  },
  {
    brand: 'Realme',
    model: 'GT 2 Pro',
    os: 'Android',
    screen_size: 6.7,
    ram: 8,
    storage_capacity: 256,
    battery_capacity: 5000,
    camera_megapixels: 50,
    price: 749.99,
    release_date: '2022-02-28',
    color: 'Steel Black',
    is_dual_sim: true,
  },
  {
    brand: 'Motorola',
    model: 'Edge 30',
    os: 'Android',
    screen_size: 6.5,
    ram: 8,
    storage_capacity: 128,
    battery_capacity: 4020,
    camera_megapixels: 50,
    price: 499.99,
    release_date: '2022-05-19',
    color: 'Meteor Gray',
    is_dual_sim: false,
  },
  {
    brand: 'Asus',
    model: 'ROG Phone 6',
    os: 'Android',
    screen_size: 6.78,
    ram: 16,
    storage_capacity: 512,
    battery_capacity: 6000,
    camera_megapixels: 50,
    price: 999.99,
    release_date: '2022-07-05',
    color: 'Phantom Black',
    is_dual_sim: true,
  },
  {
    brand: 'Oppo',
    model: 'Find X5 Pro',
    os: 'Android',
    screen_size: 6.7,
    ram: 12,
    storage_capacity: 256,
    battery_capacity: 5000,
    camera_megapixels: 50,
    price: 1099.99,
    release_date: '2022-02-24',
    color: 'Ceramic White',
    is_dual_sim: true,
  },
  {
    brand: 'Vivo',
    model: 'X80 Pro',
    os: 'Android',
    screen_size: 6.78,
    ram: 12,
    storage_capacity: 256,
    battery_capacity: 4700,
    camera_megapixels: 50,
    price: 999.99,
    release_date: '2022-04-25',
    color: 'Cosmic Black',
    is_dual_sim: true,
  },
  {
    brand: 'ZTE',
    model: 'Axon 20',
    os: 'Android',
    screen_size: 6.92,
    ram: 8,
    storage_capacity: 128,
    battery_capacity: 4220,
    camera_megapixels: 32,
    price: 399.99,
    release_date: '2020-09-01',
    color: 'Midnight Black',
    is_dual_sim: false,
  },
  {
    brand: 'HTC',
    model: 'U12+',
    os: 'Android',
    screen_size: 6.0,
    ram: 6,
    storage_capacity: 128,
    battery_capacity: 3500,
    camera_megapixels: 12,
    price: 649.99,
    release_date: '2018-05-23',
    color: 'Translucent Blue',
    is_dual_sim: false,
  },
  {
    brand: 'Lenovo',
    model: 'Legion Phone Duel 2',
    os: 'Android',
    screen_size: 6.92,
    ram: 12,
    storage_capacity: 512,
    battery_capacity: 5500,
    camera_megapixels: 64,
    price: 999.99,
    release_date: '2021-04-08',
    color: 'Ultimate Black',
    is_dual_sim: true,
  },
  {
    brand: 'BlackBerry',
    model: 'Key2 LE',
    os: 'Android',
    screen_size: 4.5,
    ram: 4,
    storage_capacity: 64,
    battery_capacity: 3000,
    camera_megapixels: 12,
    price: 349.99,
    release_date: '2018-08-16',
    color: 'Slate',
    is_dual_sim: false,
  },
  {
    brand: 'Alcatel',
    model: '1S',
    os: 'Android',
    screen_size: 6.22,
    ram: 3,
    storage_capacity: 32,
    battery_capacity: 4000,
    camera_megapixels: 13,
    price: 149.99,
    release_date: '2020-02-01',
    color: 'Black',
    is_dual_sim: true,
  },
  {
    brand: 'TCL',
    model: '10 SE',
    os: 'Android',
    screen_size: 6.52,
    ram: 4,
    storage_capacity: 64,
    battery_capacity: 4000,
    camera_megapixels: 48,
    price: 179.99,
    release_date: '2020-05-01',
    color: 'Ice Blue',
    is_dual_sim: false,
  },
];

// CREATE DataBase

(async function () {
  try {
    const crearedPhoneDB = await Phone.bulkCreate(phones);
    console.log(crearedPhoneDB);
  } catch (err) {
    console.log(err);
  }
})();

/// додавання нового телефону,
(async function () {
  try {
    const phone = {
      brand: 'Lenovo',
      model: 'Legion Phone Duel 2',
      os: 'Android',
      screen_size: 6.1,
      ram: 6,
      storage_capacity: 128,
      battery_capacity: 4379,
      camera_megapixels: 15.5,
      price: 999.99,
      release_date: '2015-09-12',
      color: 'Purple',
      is_dual_sim: false,
    };

    const createdPhone = await Phone.create(phone);
    console.log(createdPhone);
  } catch (err) {
    console.log(err);
  }
})();

// отримання списку телефонів (* 3-я сторінка при перегляді по 4 телефони на сторінці, упорядкованих за роком виробництва),

(async function getPaginatedPhones (page = 3, limit = 4) {
  try {
    const offset = (page - 1) * limit;
    const phones = await Phone.findAll({
      order: [['release_date', 'DESC']],
      limit: limit,
      offset: offset,
    });

    console.log(phones);
    return phones;
  } catch (err) {
    console.log(err);
  }
})();

//  *отримання списку телефонів поточного року видання,

(async function () {
  try {
    const currentYear = new Date().getFullYear();
    const foundPhones = await Phone.findAll({
      where: {
        release_date: {
          [Op.gte]: new Date(currentYear, 0, 1),
        },
      },
      order: [['release_date', 'DESC']],
    });

    console.log(foundPhones);
  } catch (err) {
    console.log(err);
  }
})();

// *отримання списку телефонів старше 2022 року випуску,

(async function () {
  try {
    const foundPhones = await Phone.findAll({
      where: {
        release_date: {
          [Op.lt]: new Date(2022, 0, 1),
        },
      },
      order: [['release_date', 'DESC']],
    });

    console.log(foundPhones);
  } catch (err) {
    console.log(err);
  }
})();

// оновлення: змінити розмір оперативної пам'яті телефону з id: 1,
(async function () {
  try {
    const phoneId = 1;
    const newRam = 12;

    const updatePhone = await Phone.update(
      { ram: newRam },
      { where: { id: phoneId } }
    );

    if (updatePhone > 0) {
      const updatedPhone = await Phone.findByPk(phoneId);
      console.log(updatedPhone);
    } else {
      console.log(`Phone Not Found`);
    }
  } catch (err) {
    console.log(err);
  }
})();

// видалення телефону з id: 2.
(async function () {
  try {
    const phoneId = 2;

    const deletedCount = await Phone.destroy({
      where: { id: phoneId },
    });

    if (deletedCount > 0) {
      console.log(`Phone with ID ${phoneId} was deleted`);
    } else {
      console.log(`Phone with ID ${phoneId} nor found`);
    }
  } catch (err) {
    console.log(err);
  }
})();

// *оновлення: додати нфс всім телефонам 2023 року випуску,

(async function () {
  try {
    const currentYear = 2023;
    const startDate = new Date(Date.UTC(currentYear, 0, 1));
    const endDate = new Date(Date.UTC(currentYear + 1, 0, 1));

    const updatedPhones = await Phone.update(
      { isNFC: true },
      {
        where: {
          release_date: {
            [Op.gte]: startDate,
            [Op.lt]: endDate,
          },
        },
        returning: true,
        raw: true,
      }
    );

    console.log(updatedPhones);
  } catch (err) {
    console.log(err);
  }
})();

//// *видалення телефонів 2015 року випуску.

(async function () {
  try {
    const startDate = new Date(Date.UTC(2015, 0, 1));
    const endDate = new Date(Date.UTC(2016, 0, 1));

    const deletedPhones = await Phone.destroy({
      where: {
        release_date: {
          [Op.gte]: startDate,
          [Op.lt]: endDate,
        },
      },
      returning: true,
      raw: true,
    });

    console.log(deletedPhones);
  } catch (err) {
    console.log(err);
  }
})();

// **вивести середній розмір оперативної пам'яті телефонів

(async function () {
  try {
    const averageRam = await Phone.findAll({
      attributes: [[sequelize.fn('AVG', sequelize.col('ram')), 'averageRam']],
    });

    console.log(averageRam);
  } catch (err) {
    console.log(err);
  }
})();

// **вивести кількість телефонів кожної марки.

(async function () {
  try {
    const brandCounts = await Phone.findAll({
      attributes: [
        'brand',
        [sequelize.fn('COUNT', sequelize.col('id')), 'phoneCount'],
      ],
      group: 'brand',
      order: [['phoneCount', 'DESC']],
    });

    brandCounts.forEach(brand => {
      console.log(brand.dataValues.brand, brand.dataValues.phoneCount);
    });
  } catch (err) {
    console.log(err);
  }
})();

// **вивести бренди, у телефонів яких максимальна діагональ більше за 6.6

(async function () {
  try {
    const brandsWithMaxDiagonal = await Phone.findAll({
      attributes: [
        'brand',
        [sequelize.fn('MAX', sequelize.col('screen_size')), 'maxDiagonal'],
      ],
      group: 'brand',
      having: sequelize.where(
        sequelize.fn('MAX', sequelize.col('screen_size')),
        {
          [Op.gt]: 6.6,
        }
      ),
      order: [['maxDiagonal', 'DESC']],
    });

    brandsWithMaxDiagonal.forEach(brand => {
      console.log(brand.dataValues.brand, brand.dataValues.maxDiagonal);
    });
  } catch (err) {
    console.log(err);
  }
})();
