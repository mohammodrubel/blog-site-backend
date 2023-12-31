import { z } from 'zod'

const updateblogZodValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    date: z.string().optional(),
    content: z.string().optional(),
    tags: z.enum(['blogging', 'writing', 'personal','Unknown']).optional(),
  }),
})

export default updateblogZodValidation
