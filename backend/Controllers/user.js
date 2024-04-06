import { User } from "../Model/user.js";
import bcrypt from 'bcrypt'
import { generateToken } from "../utils/generateToken.js";

export const register = async(req, res) => {
try {
    const {name,email,password,cat,mob}=req.body;

    if (!name || !email || !password || !cat || !mob) {
        return res.status(400).json({ message: "please enter details" });
    }

    const userFound= await User.findOne({email});
    if (userFound) {
        return res.status(400).json({ message: "user Already Exist" });
    }

    const hashedPassword=await bcrypt.hash(password,10);

  const user=await User.create({
        name,
        email,
        password:hashedPassword,
        cat,
        mob,
    })

    generateToken(user,res,"Registered Successfully",201)

} catch (error) {
    console.log("Error in registering user",error)
}
}

export const login = async(req, res) => {
try {
    const {email,password}=req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'please enter fields properly' });
    }

     const user=await User.findOne({email}).select("+password")

     if(!user)   return res.status(400).json({ message: "User not Found" });

     const matchedPassword =await bcrypt.compare(password, user.password);

     if (!matchedPassword) {
         return res.status(400).json({ message: "Either password or email is not valid" });
     }

     generateToken(user, res, `Welcome back,${user.name}`, 200);

} catch (error) {
    console.log('error in login api ', error);
}
    
}
export const logout = (req, res) => {

    res.status(200).cookie("token", "", { 
        expires: new Date(Date.now()) ,
        sameSite: "none",
        secure: false,
    }).json({
        success: true,
        message: "Logout"
    })
}