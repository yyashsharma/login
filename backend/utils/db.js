import mongoose from "mongoose";

//connect to database
export const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "jwtAuth"
    }).then((c) => {
        console.log(`database connected with ${c.connection.host}`);
    }).catch((e) => {
        console.log(e)
    })
}