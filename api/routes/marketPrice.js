// import express from 'express'
// import mongoose from 'mongoose'
// import MarketPrice from '../models/marketPriceModel.js'
// const router = express.Router()


// router.post('/',async(req,res) =>{
// const{cropname, province, price} = req.body;
// const data ={
//     cropname,
//     province,
//     price
// }
// const registered = await MarketPrice.save()
// res.status(201).send("Registered")
// })



import express from 'express'
import {createCrop, getCrop} from '../controllers/cropMarketPriceController.js'
const router = express.Router()

router
.route('/getCrop')
.get( getCrop)

router.route('/create').post(createCrop)


export default router
