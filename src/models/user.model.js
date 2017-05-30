var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chattydatabase', function (err) {
    if (err) { console.log(err); }
})
mongoose.Promise = Promise;
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    userName: String,
    email: String,
    password: String
});

module.exports = mongoose.model('User', userSchema);