const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const SignUpSchema = require('../model/signupModel');

const create = require('../CRUD/Create');
const read = require('../CRUD/Read');
const update = require('../CRUD/Update');
const Delete = require('../CRUD/Delete');
const verifyToken = require('../tokenVerificattion');

//const verifyToken = require('..tokenVerificattion');

//#region Create Operation
router.post('/create', async (req, res) => {
    console.log('body', req.body);
    const { name, userName, email, phone_number, password } = req.body;
    hashedValue = await bcrypt.hash(password, 10);
    const data = {
        name,
        userName,
        email,
        phone_number,
        password: hashedValue,
    };
    console.log(data);

    try {
        const createData = await create(SignUpSchema, data);
        console.log(createData, 'data');

        if (createData.createSignUp) {
            res.status(200).json({
                create: createData,
                msg: 'Signup successful !!!',
                token: 'aaaaahghjgjkhhuydsestfygughvcfx',
            });
        } else {
            console.log('.......');
            res.status(200).json({ err: 'Username already exists!!!' });
        }
    } catch {
        res.status(400).json({ msg: 'Something Went Wrong' });
    }
});
//#endregion

//#region Read Operation
router.get('/read', verifyToken, async (req, res) => {
    console.log('inside read signup');

    try {
        const readData = await read(SignUpSchema);

        if (readData) {
            res.status(200).json({ readData: readData });
        } else {
            res.status(400).json({ msg: 'Read not successful' });
        }
    } catch (error) {
        res.status(400).json({ msg: 'Something Went Wrong: ' + error.message });
    }
});
//#endregion

//#region Update Operation
router.patch('/update/:id', async (req, res) => {
    console.log('inside update operation');
    const { name, username, phone_number, email, password } = req.body;
    try {
        const id = req.params.id;
        updateData = { phone_number: phone_number, enail: email };
        const updatedUser = await update(SignUpSchema, id, updateData);

        if (updatedUser) {
            res.status(200).json({
                msg: 'Update successful',
                updatedUser: updatedUser,
            });
        } else {
            res.status(400).json({ msg: 'Update not successful' });
        }
    } catch (error) {
        res.status(400).json({ msg: 'Something Went Wrong: ' + error.message });
    }
});
module.exports = router;
//#endregion

//#region Delete Operation
router.delete('/delete/:id', async (req, res) => {
    console.log('inside delete operation');
    try {
        const id = req.params.id;
        const deletedUser = await Delete(SignUpSchema, id);

        if (deletedUser) {
            res.status(200).json({
                msg: 'Deletion successful',
                deletedUser: deletedUser,
            });
        } else {
            res.status(400).json({ msg: 'Deletion Unsuccessful' });
        }
    } catch (error) {
        res.status(400).json({ msg: 'Something Went Wrong' });
    }
});
//#endregion
