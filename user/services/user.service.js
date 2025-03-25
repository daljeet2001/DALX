import userModel from '../models/user.model.js';
import {publishToQueue} from '../services/rabbit.js';


export const createUser = async ({
    email, password
}) => {

    if (!email || !password) {
        throw new Error('Email and password are required');
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userModel.create({
        email,
        password: hashedPassword
    });
    console.log(user);
    
    
    const loguserid = user._id;       
    publishToQueue('loguserid', JSON.stringify(loguserid));  

    return user;

}

export const getAllUsers = async ({ userId }) => {
    const users = await userModel.find({
        _id: { $ne: userId }
    });
    return users;
}