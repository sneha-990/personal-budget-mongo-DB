const mongoose = require('mongoose')

const budgetSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true,
    },
    budget:{
        type:Number,
        required:true
    },
    color:{
        type:"String",
        validate: {
            validator: function(value) {
              // Using a regular expression to check if the value is a valid hexadecimal color code
              return /^#([A-Fa-f0-9]{6})$/.test(value);
            },
            message: 'Color code must be a valid hexadecimal color code.'
        },
        required:true,
        trim:true,
        uppercase:true
    }
},{collection:'personalcollection'})

module.exports = mongoose.model('personalcollection',budgetSchema)