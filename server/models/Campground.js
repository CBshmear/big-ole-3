const { Schema, model } = require("mongoose");

const campgroundSchema = new Schema({
  campgroundId: {
    type: String,
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
});

//const Campground = model('Campground', campgroundSchema);

module.exports = campgroundSchema;
