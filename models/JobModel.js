const mongoose = require('mongoose');

const JobSchema = mongoose.Schema({
  active: {
    type: Boolean,
    default: true,
  },
  position: {
    type: String,
    // required: true,
  },
  category: {
    type: String,
    // required: true,
  },
  jobType: {
    type: String, // Full-Time/Part-Time/Internship
    // required: true,
  },
  salary: {
    type: String,
  },
  candidateRegion: {
    type: String,
    default: 'Anywhere in the world',
  },
  applyType: {
    type: String, // ATS/URL/EMAIL
    // required: true,
  },
  applyValue: {
    type: String,
  },
  jobDescription: {
    type: String,
    // required: true,
  },
  jobDescriptionState: {
    type: Object,
  },
  companyName: {
    type: String,
    // required: true,
  },
  companyWebsite: {
    type: String,
    // required: true,
  },
  companyTagline: {
    type: String,
  },
  companyDescriptionState: {
    type: Object,
  },
  companyLogo: {
    type: String, // base64 value for now - no path
    // required: true,
  },
  logoFile: {
    type: Object, // logo object
    // required: true,
  },
  companyDescription: {
    type: String,
  },
  planType: { // UPDATED
    type: String, // 1-Month, 2-Month, 3-Month
    // required: true,
  },
  dateOfPurchase: {
    type: Date,
    default: Date.now,
  },
  dateOfExpiry: {
    type: Date,
  },
  createdBy: {
    type: String,
    // required: true,
  },
  updatedBy: {
    type: String,
  },
  applications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application',
  }],
}, { timestamps: true });

module.exports = mongoose.model('Job', JobSchema);
