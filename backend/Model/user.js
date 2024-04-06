import mongoose from 'mongoose'

//create a schema 

const schema= new mongoose.Schema({
    name:{
        type:String,
        required:[true, "name is required"],
    },
    email:{
        type:String,
        unique:true,
        required:[true, "Email is required"],
    },
    password: {
        type: String,
        select: false,
        required: [true, "Password is required"]
    },
    cat:{
        type:String,
        required: [true, "required"]
    },
    mob:{
        type:Number,
        required: [true, "required"]
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})

//create a model(collection)

export const User= mongoose.model("User",schema)