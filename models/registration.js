const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registrationSchema = new Schema(
  {
    lastName: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    idNo: {
      type: String,
      required: true,
    },
    rank: {
      type: String,
      required: true,
    },
    regimentNo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Registration = mongoose.model('Registration', registrationSchema);
module.exports = Registration;
