const faker = require('faker');

const specialties = `Cardiology,Orthopedics,Gastroenterology,Urology,Dermatology,Plastic Surgery,Immunology,Obstetrics & Gynecology,Oncology,Ophthalmology,Pediatrics,Psychiatry,ENT`.split(',').sort();

const cities = `San Francisco,Oakland,Palo Alto,Berkeley,San Jose,Mountain View,San Mateo,Redwood City,Menlo Park,Millbrae`.split(',').sort();

const generateDoctor = () => {
  let doctor = '';

  doctor += `${faker.fake('{{name.firstName}} {{name.lastName}}')},${faker.image.avatar()},${specialties[faker.random.number({min: 0, max: (specialties.length-1)})]},${faker.address.streetAddress()},${cities[faker.random.number({min: 0, max: (cities.length-1)})]},'CA',${faker.phone.phoneNumberFormat(1)},${faker.finance.amount(1, 5, 1)}\n`;
  
  return doctor;
}

module.exports = { 
  generateDoctor,
  specialties,
  cities,
};
