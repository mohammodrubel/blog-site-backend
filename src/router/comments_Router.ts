import express from 'express'
import { CommentsController } from '../controller/comments_controller'

const router = express.Router()

    router.post('/comments',CommentsController.createCommentes)

export const commentsRouter = router 