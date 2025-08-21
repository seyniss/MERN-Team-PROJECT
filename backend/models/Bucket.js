// models/Bucket.js
const mongoose = require('mongoose');

const bucketSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 200 },
    isCompleted: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },

    text: { type: String, required: true, trim: true, maxlength: 400 },
    img: { type: String, trim: true },

    category: {
      type: String,
      trim: true,
      maxlength:100,
    },

    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  { timestamps: true }
);

bucketSchema.pre('save', function (next) {
  if (this.startDate > this.endDate) {
    return next(new Error('Start date must be before end date'));
  }
  next();
});


module.exports = mongoose.model('Bucket', bucketSchema);



