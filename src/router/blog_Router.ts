import express from 'express'
import { BlogController } from '../controller/blog_Controller_'
import CheckValidation from '../Middleware/Check_Validation'
import blogZodValidation from '../validation/blog_zod_validation_'
import updateblogZodValidation from '../validation/blog_zod_validation'

const router = express.Router()

router.post(
  '/create-blog',
  CheckValidation(blogZodValidation),
  BlogController.createBlogController,
)
router.get('/',BlogController.getAllBlogController)
router.get('/:id',BlogController.getSingleBlogController)
router.put('/:id',CheckValidation(updateblogZodValidation),BlogController.updateBlogController)
router.delete('/:id',BlogController.deleteSingleBlogController)



export const blogRouter = router
