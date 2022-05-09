import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cropSelection: {
        type: String,
        required: false
    },
    fatherName: {
        type: String,
        
    },
    motherName: {
        type: String,
        
    },
    spouseName: {
        type: String,
        
    },
    password: {
        type: String,
        required:true,
    },
    gender: {
        type: String,
        required:true,
    },
    maritalStatus: {
        type: String,
        required:true,
    },
    country: {
        type: String,
        required:true,
    },
    address: {
        type: String,
        required:true,
    },
    province: {
        type: String,
        required:true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
}, {
    timestamps: true
})

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('UserSignup', userSchema);

export default User;