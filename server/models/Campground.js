const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const campgroundSchema = new Schema({
  campgroundId: {
    type: String, 
    unique: true, 

  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  // combined latitude and longitude.. both are available from api if needed for google maps
  latlong: {
    type: String,
  },
  reservation: {
    type: String,
  },
  totalSites: {
    type: Number,
  },
  toilets: {
    type: String,
  },
  potableWater: {
    type: String,
  },
  firewood: {
    type: String,
  }, 
  note: [ 
    { 
      noteText: { 
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      }, 
      noteAuthor: {
        type: String, 
        required: true,
      },
      createdAt: { 
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      }
    }
  ]
});

const Campground = model('Campground', campgroundSchema);

 
module.exports = { Campground, campgroundSchema };
