import jwt from "jsonwebtoken"

export const getToken = (userId) => {
    try{
        const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "7d"})
        console.log(token) // Log the generated token
        return token
    } catch(error){
        console.error(error)
        
    }
}