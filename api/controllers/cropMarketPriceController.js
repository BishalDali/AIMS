import express from 'express'
import asyncHandler from 'express-async-handler'


import MarketPrice from '../models/marketPriceModel.js'

// @desc    create new order
// @rout    POST /api/create
// @access  private
const createCrop = asyncHandler(async (req, res) => {
    const {
       cropName,
       province,
       price
    } = req.body

    const crop = new MarketPrice({
        cropName,
        price,
        province
    })

        const createcrop = await crop.save()

        res.status(201).json(createcrop)
    
})

// @desc    GET all users
// @rout    GET /api/users/
// @access  Private/ADMIN
const getCrop = asyncHandler(async (req, res) => {
    const marketPrice = await MarketPrice.find({})
    res.json(marketPrice)
})

export{
    createCrop,
    getCrop
}