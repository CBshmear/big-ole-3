
const { Schema, model } = require('mongoose');

const campgroundSchema = new Schema({
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
        type: String 
    }, 
    reservation: { 
        type: String
    },
    statePark: { 
        type: String, 
        required: true,
    }, 
    state: {
        type: String, 
        required: true,
    }, 
    totalSites: { 
        type: Number,
        required: true, 
    }, 
    toilets: { 
        type: String,
    }, 
    potableWater: { 
        type: String,
    }, 
    firewood: {
        type: Boolean,
    },
  
});

// const Campground = model('Campground', campgroundSchema);

module.exports = campgroundSchema;
