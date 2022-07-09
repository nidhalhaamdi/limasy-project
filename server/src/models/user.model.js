const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Le prénom est requis"],
      trim:true
    },
    lastName: {
      type: String,
      required: [true, "le nom est requis"],
      trim:true
    },
    email: {
      type: String,
      required: [true, "L'email est requis"],
      trim:true,
      unique: true,
    },
    password: {
      type: String,
      required: false,
      minLength: 6
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpire: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('user', UserSchema);



