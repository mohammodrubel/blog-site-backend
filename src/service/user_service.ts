import httpStatus from "http-status";
import { T_login } from "../Interface/login_interface";
import { T_user } from "../Interface/user_interface";
import AppError from "../error/AppError";
import { User } from "../model/user_model";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import config from "../config";
import { createToken } from "../utils/authUtils";


const createService = async(payload:T_user)=>{
    const result = await User.create(payload)
    return result
}
const getAllUsersService = async()=>{
    const result = await User.find()
    return result
}
const getSingleService = async(id:string)=>{
    const result = await User.findById(id)
    return result
}
const deleteSingleService = async(id:string)=>{
    const result = await User.findByIdAndUpdate(id, { isDeleted: true });
    return result
}
const loginService = async(payload:T_login)=>{
    const user = await User.findOne({email:payload.email})
        //is user exist
        if(!user){
            throw new AppError(httpStatus.NOT_FOUND,'user not found!')
        }
        //checking is user is deleted
        if(user.isDeleted === true){
            throw new AppError(httpStatus.BAD_REQUEST,'this user is deleted!')
        }
        //checking if the password is correct
    const checkPassword = await bcrypt.compare(payload.password,user.password)
        if(!checkPassword){
            throw new AppError(httpStatus.FORBIDDEN,'Incorrect email and password')
        }
    const userInforamtion = {
        _id:user._id,
        email:user?.email,
        role:user?.role,
        isDeleted:user?.isDeleted
    }
    console.log(user)
    const accessToken = createToken(userInforamtion, config.access_token as string,'10d');
    const refreshToken = createToken(userInforamtion, config.refresh_token as string,'10d');

    return{
        user,
        accessToken,
        refreshToken
    }

}


export const AuthService = {
    createService,
    getAllUsersService,
    getSingleService,
    deleteSingleService,
    loginService
}