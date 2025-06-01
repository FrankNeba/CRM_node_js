require('dotenv').config()
const jwt = require('jsonwebtoken')
const { hashPassword, verifyPassword } = require('../utils/hash')
const { createUser, findUser } = require('../models/userModel')
 const register = async (req, res) =>{

    try{
    console.log(req.body)
    const {email, password, password1} = req.body
    if (password != password1){
        return res.status(400).json({error:'Passwords don\'t match'})
    }
    const user = await findUser(email)
    if (user) {
        return res.status(400).json({error:'User already exists'})
    }

    const hashed = await hashPassword(password)
    createUser(email, hashed)

    return res.status(201).json({
        message: 'User registered successfully'
    })}
    catch(err){
        console.log(err)
        res.status(500).json({
            error: 'Internal server error'
        })

    }

}
 const login = async (req, res) => {
    const {email, password} = req.body
    const user = findUser(email)
    console.log(user)
    if (!user){
        return res.status(400).json({error:'Invalid credentials1'})
    }
    const valid = await verifyPassword(password, user.password)
    if (!valid){
        return res.status(400).json({error:'Invalid credentials'})
    }


    const token = jwt.sign({id: user.id, username: user.email}, process.env.JWT_SECRET)
    return res.json({token: token})
}


module.exports = {login, register}