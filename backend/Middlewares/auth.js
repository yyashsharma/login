// import jwt from 'jsonwebtoken'
// import { User } from '../Model/user.js';



// export const isAuthenticated=async(req,res,next)=>{
//     const { token } = req.cookies;

//     if (!token) {
//         return res.status(404).json({
//             success: false,
//             message: "Login First"

//         })
//     }

//     const decodedToken=jwt.verify(token,process.env.JWT_SECRET);

//     req.user = await User.findById(decodedToken._id )

//     next();
// }