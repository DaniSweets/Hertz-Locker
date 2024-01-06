const { Equipment } = require('../models');

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
    name: '',
    status: '',
    model: '',
    manufacturer: '',
    purchaseDate: '',
    condition: '',
    description: '',
  }
];

const seedEquipment = () => Equipment.bulkCreate(equipmentData);

module.exports = seedEquipment;