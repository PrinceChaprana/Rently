import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import Token from '../models/token.js'
import User from '../models/user.js';

dotenv.config();

export const signupUser = async (request, response) => {
    try {
        // const salt = await bcrypt.genSalt();
        // const hashedPassword = await bcrypt.hash(request.body.password, salt);
        const hashedPassword = await bcrypt.hash(request.body.password, 10);

        let user = {
            email: request.body.email, name: request.body.name,
            password: hashedPassword,location:{type:"Point",coordinates:[request.body.longitude,request.body.latitude]}, latitude: request.body.latitude,
            longitude: request.body.longitude, addressline: request.body.addressline,
            city: request.body.city, state: request.body.state, pincode: request.body.pincode,
            country: request.body.country,picture:request.body.picture
        }

        const newUser = new User(user);
        await newUser.save();

        return response.status(200).json({ msg: 'Signup successfull' });
    } catch (error) {
        return response.status(500).json({ msg: 'Error while signing up user' });
    }
}


export const loginUser = async (request, response) => {
    let user = await User.findOne({ email: request.body.username });
    if (!user) {
        return response.status(400).json({ msg: 'Username does not match' });
    }

    try {
        let match = await bcrypt.compare(request.body.password, user.password);
        if (match) {
            const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15m' });
            const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);

            const newToken = new Token({ token: refreshToken });
            await newToken.save();

            console.log(user.email)
            response.status(200).json({ accessToken: accessToken, refreshToken: refreshToken, userData : user });

        } else {
            response.status(400).json({ msg: 'Password does not match' })
        }
    } catch (error) {
        response.status(500).json({ msg: 'error while login the user' })
    }
}

export const getUserData = async(request, response) => {
    let username = request.params.username;
    let user = await User.findOne({ email: username})
    if(!user) return response.status(400).json({ msg: 'User does not exist'});
    let data = {picture:user.picture,email: user.email, name: user.name,latitude: user.latitude,longitude: user.longitude,addressline: user.addressline, city: user.city,state: user.state, pincode: user.pincode,country: user.country}
    return response.status(200).json(data);
}

export const logoutUser = async (request, response) => {
    const token = request.body.token;
    await Token.deleteOne({ token: token });

    response.status(204).json({ msg: 'logout successfull' });
}