const faker = require('faker');

const specialties = `Cardiology,Orthopedics,Gastroenterology,Urology,Dermatology,Plastic Surgery,Immunology,Obstetrics & Gynecology,Oncology,Ophthalmology,Pediatrics,Psychiatry,ENT`.split(',').sort();

const cities = `San Francisco,Oakland,Palo Alto,Berkeley,San Jose,Mountain View,San Mateo,Redwood City,Menlo Park,Millbrae`.split(',').sort();

const generateDoctor = () => {
  const doctor = {
    name: faker.fake('{{name.firstName}} {{name.lastName}}'),
    thumbnail: faker.image.avatar(),
    specialty: specialties[faker.random.number({min: 0, max: (specialties.length-1)})],
    street_name: faker.address.streetAddress(),
    city: cities[faker.random.number({min: 0, max: (cities.length-1)})],
    state: 'CA',
    phone_number: faker.phone.phoneNumberFormat(1),
    rating: faker.finance.amount(1, 5, 1),
  }
  return JSON.stringify(doctor);
}

module.exports = { 
  generateDoctor,
  specialties,
  cities,
};
