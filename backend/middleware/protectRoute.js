import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const ProtectRoute=async(req,res,next)=>{
    try{
        const token=req.cookies.jwt;
        // console.log(`token : ${token}`);
        if(!token){
            return res.status(401).json({error:"Unauthorized -No token provided"});
        }
        
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        
        if(!decoded){
            return res.status(401).json({error:"Unauthorized- Invalid Token"}); 
        }
        
        const user =await User.findById(decoded.userId).select("-password");
        
        if(!user){
            return res.status(401).json({error:"User not Found"}); 
        }
        req.user=user;
        
        next();

    }catch(error){
        console.log("error in login page",error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}
export default ProtectRoute;