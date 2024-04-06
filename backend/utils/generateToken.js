import jwt from 'jsonwebtoken'

export const generateToken = (user, res, message, statusCode = 200) => {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)

    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
        sameSite: "None",
        secure: false,
    }).json({
        success: true,
        message,
    })
}