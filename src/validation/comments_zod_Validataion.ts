import { z } from 'zod';
const commentsValidation = z.object({
    id:z.string(),
    body:z.object({
        email:z.string(),
        content:z.string()
    })
})

export default commentsValidation