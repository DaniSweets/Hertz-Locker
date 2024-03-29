const Equipment = require('../models/equipment');

const equipmentData = [
  {
    name: 'Laptop',
    status: 'available',
    model: 'ABC123',
    manufacturer: 'Dell',
    purchaseDate: '2022-01-01',
    condition: 'new',
    description: 'High-performance laptop',
  },
  {
    name: 'Projector',
    status: 'available',
    model: 'XYZ789',
    manufacturer: 'Epson',
    purchaseDate: '2022-02-01',
    condition: 'used',
    description: 'HD projector for presentations',
  },

  // Where we add all of our equipment data etc etc---- these are just examples

  {
    name: 'Microphone1',
    status: 'available',
    model: 'Xs-200',
    manufacturer: 'Shure',
    purchaseDate: '2022-02-11',
    condition: 'new',
    description: 'Handheld mic',
  },
  {
    name: 'Microphone2',
    status: 'available',
    model: 'Xs-200',
    manufacturer: 'Shure',
    purchaseDate: '2022-02-11',
    condition: 'new',
    description: 'Handheld mic',
  },
  {
    name: 'Drone-mic',
    status: 'down',
    model: 'Pocket 2',
    manufacturer: 'DJi',
    purchaseDate: '2020-07-10',
    condition: 'used',
    description: 'Wireless Sound Transmitter',
  },
  {
    name: 'Guitar-mic',
    status: 'available',
    model: 'PRO 35',
    manufacturer: 'Audio-Technica',
    purchaseDate: '2020-01-14',
    condition: 'new',
    description: 'Clip-on Instrument Microphone',
  },
  {
    name: 'Acoustic Guitar Pickup',
    status: 'available',
    model: 'SP-1000',
    manufacturer: 'Suny',
    purchaseDate: '2018-10-20',
    condition: 'new',
    description: 'Microphone Soundhole Pickup For Acoustic Guitar',
  },
  {
    name: 'XLR Cable-3m',
    status: 'available',
    model: 'XLR-3',
    manufacturer: 'RODE',
    purchaseDate: '2020-12-01',
    condition: 'new',
    description: 'premium 3m (10ft) XLR cable',
  },
  {
    name: 'XLR Cable-15m',
    status: 'available',
    model: 'XLR-3',
    manufacturer: 'RODE',
    purchaseDate: '2020-12-01',
    condition: 'new',
    description: 'premium m (50ft) XLR cable',
  },
  // {
  //   name: '',
  //   status: '',
  //   model: '',
  //   manufacturer: '',
  //   purchaseDate: '',
  //   condition: '',
  //   description: '',
  // },

];

const seedEquipment = () => Equipment.bulkCreate(equipmentData);

module.exports = seedEquipment;