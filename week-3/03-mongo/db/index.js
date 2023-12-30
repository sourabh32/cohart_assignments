const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://mongo:rode@cluster0.altcozq.mongodb.net/?retryWrites=true&w=majority');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username:{type:String, required:true},
    password:{type:String, required:true},
    courses:[Object]
});

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchased:[Object]
});

const CourseSchema = new mongoose.Schema({
    title:String,
    price:Number,
    imageLink:String,
    description:String,
    createdBy:String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}