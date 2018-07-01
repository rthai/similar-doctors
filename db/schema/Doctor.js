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

//doctors are ranked by descending ratings
const getDoctors = ( specialty, city ) => {
  const dept = specialty;
  const area = city;
  return Doctor.find({ specialty: dept, city: area })
    .sort({ rating: -1 })
}

module.exports = {
  Doctor,
  getDoctors,
};
