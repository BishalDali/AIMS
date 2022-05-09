import express from 'express'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';
import generateToken from '../utils/genarateToken.js'

// @desc    Auth user & token
// @rout    POST /api/users/login
// @access  public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            cropSelection: user.cropSelection,
            fatherName: user.fatherName,
            motherName: user.motherName,
            spouseName: user.fatherName,
            gender: user.gender,
            maritalStatus: user.maritalStatus,
            country : user.country,
            province: user.province,
            address: user.address,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

// @desc    Register new user
// @rout    POST /api/users/
// @access  public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, cropSelection, fatherName, motherName, spouseName, gender, maritalStatus, country, province, address } = req.body
    console.log(req.body);
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password,
        cropSelection,
        fatherName,
        motherName,
        spouseName,
        gender,
        maritalStatus,
        country,
        province,
        address
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            cropSelection: user.cropSelection,
            fatherName: user.fatherName,
            motherName: user.motherName,
            spouseName: user.fatherName,
            gender: user.gender,
            maritalStatus: user.maritalStatus,
            country : user.country,
            province: user.province,
            address: user.address,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc    GET user profile
// @rout    GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            cropSelection: user.cropSelection,
            fatherName: user.fatherName,
            motherName: user.motherName,
            spouseName: user.fatherName,
            gender: user.gender,
            maritalStatus: user.maritalStatus,
            country : user.country,
            province: user.province,
            address: user.address,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(401)
        throw new Error('User not found!!')
    }
})

// @desc    update user profile
// @rout    PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
console.log(req.body,'body');
    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        user.cropSelection = req.body.cropSelection || user.cropSelection
        user.fatherName = req.body.fatherName || user.fatherName
        user.motherName = req.body.motherName || user.motherName
        user.spouseName = req.body.spouseName || user.spouseName
        user.gender = req.body.gender || user.gender
        user.maritalStatus = req.body.maritalStatus || user.maritalStatus
        user.country = req.body.country || user.country
        user.province = req.body.province || user.province
        user.address = req.body.address || user.address

            
        if (req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            cropSelection: updatedUser.cropSelection,
            fatherName: user.fatherName,
            motherName: user.motherName,
            spouseName: user.fatherName,
            gender: user.gender,
            maritalStatus: user.maritalStatus,
            country : user.country,
            province: user.province,
            address: user.address,
            token: generateToken(updatedUser._id)
        })
    } else {
        res.status(401)
        throw new Error('User not found!!')
    }
})

// @desc    GET all users
// @rout    GET /api/users/
// @access  Private/ADMIN
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
})

// @desc    delete user profile
// @rout    DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if (user) {
        await user.remove()
        res.json({ message: 'User Removed' })
    } else {
        res.status(401)
        throw new Error('User not found!!')
    }
})

// @desc    GET user by id
// @rout    GET /api/users/:id
// @access  Private/ADMIN
const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password')
    if (user) {
        res.json(user)
    } else {
        res.status(401)
        throw new Error('User not found!!')
    }
})

// @desc    update user
// @rout    PUT /api/users/
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        user.cropSelection = req.body.cropSelection || user.cropSelection
        user.fatherName = req.body.fatherName || user.fatherName
        user.motherName = req.body.motherName || user.motherName
        user.spouseName = req.body.spouseName || user.spouseName
        user.gender = req.body.gender || user.gender
        user.maritalStatus = req.body.maritalStatus || user.maritalStatus
        user.country = req.body.country || user.country
        user.province = req.body.province || user.province
        user.address = req.body.address || user.address
        user.isAdmin = req.body.isAdmin

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            cropSelection: updatedUser.cropSelection,
            fatherName: user.fatherName,
            motherName: user.motherName,
            spouseName: user.fatherName,
            gender: user.gender,
            maritalStatus: user.maritalStatus,
            country : user.country,
            province: user.province,
            address: user.address,
        })
    } else {
        res.status(401)
        throw new Error('User not found!!')
    }
})

export {
    authUser,
    getUserProfile,
    registerUser,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser
}