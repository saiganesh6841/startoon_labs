
const mongoose=require("mongoose")


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female'] 
  },
  count: {
    type: Number,
    default: 0
  },
  lastLoginDate: {
    type: Date,
    default: Date.now
  },
  roleType: {
    type: String,
    enum: ['user', 'admin'],
    default:'user'
  }
  });



  const User = mongoose.model('User', userSchema);

module.exports = User;
