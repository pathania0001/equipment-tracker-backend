const availabilityRepo = require('./availability.repository');
const bookingRepo = require('./booking.repository');

module.export = {
    ...availabilityRepo,
    ...bookingRepo
}