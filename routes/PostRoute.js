import express from 'express'
import { createPost, deletePost, getPost, getTimelinePosts, likePost, commentsPost, updatePost } from '../controllers/PostController.js'
import authMiddleWare from '../middleware/AuthMiddleware.js'
const router = express.Router()

router.post('/', createPost)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.put('/:id/like', likePost)
router.post('/:id/comments', commentsPost)
router.get('/:id/timeline', getTimelinePosts)

export default router