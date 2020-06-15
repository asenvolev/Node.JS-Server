const fs = require('fs');

exports.getWorkout = (req,res) => {
    const src = fs.createReadStream('./views/public/ChestWorkout.txt');
    src.pipe(res);
}