const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    student_id: {type :number},
    student_name :{type :String},
    course :{type : String},
    dateOfJoining : {type : Date ,default :Date.now},
    department : { type :String }
});
module.exports = mongoose.model('schema',studentSchema)