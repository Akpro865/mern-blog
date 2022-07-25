const express = require('express')
const router = express.Router()
const { createBlog, updateBlog, deleteBlog, getBlog, getBlogs } = require('../controllers/blogs')
const { verify } = require('../middleware/auth')

router.route('/').post(createBlog).get(getBlogs)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog)
router.get('/find/:id', getBlog)

module.exports = router