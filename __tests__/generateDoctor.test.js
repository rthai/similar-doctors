const { generateDoctor } = require("../db/data/generateDoctor");

const doctor = generateDoctor();

describe('CSV Faker Doctor Data Generator', () => {

  test('should generate doctor details as a string', () => {
    expect(typeof doctor).toBe('string'); 
  });

  test('doctor details should have 8 fields', () => {
    expect(doctor.split(',')).toHaveLength(8); 
  });

});
