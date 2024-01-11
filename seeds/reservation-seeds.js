const Reservation = require('../models/reservation');
const sequelize = require('../config/connection');

const reservationData = [
  {
    startTime: '2023-01-15T08:00:00',
    endTime: '2023-01-15T10:00:00',
    eventName: 'Wedding',
    equipmentId: 1, // ID of the associated equipment
    notes: 'First reservation for the laptop',
  },
  {
    startTime: '2023-02-01T14:00:00',
    endTime: '2023-02-01T16:00:00',
    eventName: 'TED Talk',
    equipmentId: 2, // ID of the associated equipment
    notes: 'Projector reserved for a presentation',
  },
  //////////////Fill in with our actual data that we are wanting
];

const seedReservations = () => Reservation.bulkCreate(reservationData);

module.exports = seedReservations;