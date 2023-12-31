import { z } from 'zod'



const blogZodValidation = z.object({
  body: z.object({
    title: z.string(),
    author: z.string(),
    date: z.string(),
    image:z.string(),
    content: z.string(),
    tags: z.enum(['blogging', 'writing', 'personal','Unknown'])
  }),
})

export default blogZodValidation
