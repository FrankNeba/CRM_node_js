const jwt = require('jsonwebtoken')
const {findUser} = require('../models/userModel')

const authenticationToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]
    if (!token) {
        return res.status(401).json({Unauthorized: 'Access denied, User not authenticated'})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({Unauthorized: 'Invalid Token'})
        const tUser = findUser(user.username)
        if (tUser.id != user.id) return res.status(403).json({Unauthorized: 'Invalid Token'})
        req.user = user
        console.log(user)
        next()
    })
}

module.exports = authenticationToken