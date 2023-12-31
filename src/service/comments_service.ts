import { T_comments } from '../Interface/comments_interface'
import { Blog } from '../model/blog_model_'

const createCommentsService = async (id: string, data: T_comments) => {
  const result = await Blog.findByIdAndUpdate(
    id,
    { $push: { comments: data } },
    { new: true },
  )
  return result
}

export const CommentsService = {
  createCommentsService,
}
