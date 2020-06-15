const fs = require('fs');

exports.getWorkout = (req,res) => {
    const src = fs.createReadStream('./ChestWorkout.txt');
    src.pipe(res);
}