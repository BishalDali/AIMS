const moongoose = require('mongoose');
const signupSchema = new moongoose.Schema(
    {
        userName: {
            type: String,
            required: false,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone_number: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = moongoose.model('Signup', signupSchema);
