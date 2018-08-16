const fs = require('fs');
const { generateDoctor } = require('./generateDoctor.js');

const stream = fs.createWriteStream('db/data/doctorList.txt');
const header = `name,thumbnail,specialty,street_name,city,state,phone_number,rating\n`;

stream.write(header);

const write200x = () => {
  let i = 5;
  function write() {
    let ok = true;
    do {
      i -= 1;
      if (i === 0) {
        stream.write(generateDoctor(), 'utf-8', () => {
          stream.end();
        });
      } else {
        ok = stream.write(generateDoctor(), 'utf-8');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      stream.once('drain', write);
    }
  }
  write();
};

write200x();
