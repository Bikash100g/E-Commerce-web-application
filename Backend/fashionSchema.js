
const mongoose = require('mongoose');

const fashionSchema = new mongoose.Schema({
    productCategory: String,
    productName: { type: String, required: true,},
    unitsSold: { type: Number, required: true, default: 0 },
    returns: { type: Number, default: 0 },
    revenue: { type: Number, min: 0 },
    customerRating: { type: Number, min: 1, max: 5 },
    stockLevel: { type: Number, min: 0 },
    season: { type: String, enum: ['Summer', 'Winter', 'Spring', 'Autumn'] },
    trendScore: { type: Number, min: 0 }
});

module.exports = mongoose.model('FashionShopData', fashionSchema);
