const fs = require('fs');
const { generateDoctor } = require('./generateDoctor.js');

const stream = fs.createWriteStream('db/data/doctorList.json');

stream.write('[');

const write100x = () => {
  let i = 100;
  function write() {
    let ok = true;
    do {
      i -= 1;
      if (i === 0) {
        stream.write(generateDoctor(), 'utf-8', () => {
          stream.write(']');
          stream.end();
        });
      } else {
        ok = stream.write(generateDoctor(), 'utf-8');
        stream.write(',');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      stream.once('drain', write);
    }
  }
  write();
};

write100x();