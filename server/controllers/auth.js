const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/User')

// register route
const register = asyncHandler(async(req, res)=>{	
	const { username, email, password, address, lastname } = req.body
	if (!username || !email || !password) {
    	res.status(400)
    	throw new Error('Please add all fields')
    }

    // hashing password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // checking user exists
    const userExists = await User.findOne({email})

    if(userExists){
    	res.status(400)
    	throw new Error('user already exists')
    }

    // creating user
	const user = await User.create({username, email, password: hashedPassword, address, lastname})

	if(user){
		res.status(201).json(user)
	} else{
		res.status(500)
	}
})


// login route
const login = asyncHandler(async(req, res)=>{
	const { email, password } = req.body

	const user = await User.findOne({email})

	if(!user){
		res.send(404)
		throw new Error('no user found')
	}

	const accessToken = await jwt.sign({id: user._id, username: user.username}, process.env.SECRET_KEY,
		{expiresIn: "1d"}
	)

	if(user && (await bcrypt.compare(password, user.password))){
		const { password, ...others } = user._doc
		res.status(200).json({...others, accessToken})
	} else {
    	res.status(400)
    	throw new Error('Invalid credentials')
  	}
})

module.exports = {
	register,
	login
}