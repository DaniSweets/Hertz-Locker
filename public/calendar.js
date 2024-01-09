const Calendar = require('@fullcalendar/core');
const dayGridPlugin = require('@fullcalendar/daygrid');
const Reservation = require('../models/reservation');

const allReservations = Reservation.findAll();
        console.log(allReservations);

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth'
        
      });

    calendar.render();
  });