import {Router} from 'express'
import { blogRouter } from './blog_Router'
import { userRouter } from './auth_Router';
import { commentsRouter } from './comments_Router';

const router = Router()

    const myRouter = [
        {path:'/blog',route:blogRouter},
        {path:'/auth',route:userRouter},
        {path:'/blog',route:commentsRouter},
    ]

    myRouter.forEach((route) => router.use(route.path, route.route));

export default router 