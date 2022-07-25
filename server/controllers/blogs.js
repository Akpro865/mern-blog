const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Blog = require('../models/Blog')

// create blog
const createBlog = asyncHandler(async(req, res)=>{	
	try{
		const blog = await Blog.create(req.body)

		res.status(201).json(blog)
	}catch(err){
		res.status(500).json(err)
	}
})

// update blog
const updateBlog = asyncHandler(async(req, res)=>{	
	const blog = await Blog.findById(req.params.id)
	try{
		if(blog.username === req.body.username){		
			try{
				const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, 
					{ $set: req.body }, { new: true }
				)
				res.status(200).json(updatedBlog)
			} catch(err){
				res.status(500).json(err)
			}
		} else {
			res.status(403).json("you can update only your blog")
		}
	}catch(err){
		res.status(404).json('no blog found')
	}
})

// delete blog
const deleteBlog = async(req, res) => {
	const blog = await Blog.findById(req.params.id)
	try{
		if(blog.username === req.body.username) {
			
			try {
				await Blog.findByIdAndRemove(req.params.id)

				res.status(200).json("Blog deleted successfully!")
			} catch (err) {
				res.status(500).json(err)
			}
		} else {
			res.status(403).json("you can delete only your blog")
		}
	}catch(err){
		res.status(404).json('no blog found')
	}
}

// get blog
const getBlog = asyncHandler(async(req, res)=>{	
	try{
		const blog = await Blog.findById(req.params.id)

		res.status(200).json(blog)
	}catch(err){
		res.status(500).json(err)
	}
})

// get blogs
const getBlogs = asyncHandler(async(req, res)=>{		
	const username = req.query.user;
	const cat = req.query.cats;
	try{
		let blogs;
		if(username){
			blogs = await Blog.find({username})
		} else if(cat){
			blogs = await Blog.find({cat: {
				$in: [cat]
			}})
		}else{
			blogs = await Blog.find()			
		}

		res.status(200).json(blogs.reverse())
	}catch(err){
		res.status(500).json(err)
	}
})

module.exports = { createBlog, updateBlog, deleteBlog, getBlog, getBlogs}