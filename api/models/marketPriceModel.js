import mongoose from 'mongoose'


const marketPriceSchema = mongoose.Schema({
    cropName: {
        type: String,
        required: true,

        
    },
    province: {
        type: String,
        required: true
    
    },
    price: {
        type: String,

        unique: true
    },
    province: {
        type: Array,
        required: true
    },
    price: {
        type: Array,
        required: true
    }
    

}, {
    timestamps: true
})

const MarketPrice = mongoose.model('MarketPrice', marketPriceSchema);

export default MarketPrice;