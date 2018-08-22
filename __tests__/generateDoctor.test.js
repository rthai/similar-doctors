const { generateDoctor } = require("../db/data/generateDoctor");

const doctor = JSON.parse(generateDoctor());

describe('JSON Faker Doctor Data Generator', () => {

  test('should generate sample data with appropriate value types', () => {
    expect(typeof doctor).toBe('object');
    expect(typeof doctor.name).toBe('string');
    expect(typeof doctor.thumbnail).toBe('string'); 
    expect(typeof doctor.specialty).toBe('string');
    expect(typeof doctor.street_name).toBe('string');
    expect(typeof doctor.city).toBe('string');
    expect(typeof doctor.state).toBe('string'); 
    expect(typeof doctor.phone_number).toBe('string'); 
    expect(typeof parseInt(doctor.rating)).toBe('number'); 
  });

  test('sample doctor state should be CA', () => {
    expect(doctor.state).toBe('CA'); 
  });
  
  test('sample doctor rating should be an number between 1 and 5, inclusive', () => {
    expect(parseInt(doctor.rating)).toBeGreaterThanOrEqual(1); 
    expect(parseInt(doctor.rating)).toBeLessThanOrEqual(5); 
  });

});
