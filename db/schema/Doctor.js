const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  thumbnail: String,							
  specialty: String,				
  street_name: String,			
  city: String,					
  state: String,		
  phone_number: String,
  rating: Number,					
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
