import { Schema, model } from 'mongoose';
import { T_blog } from '../Interface/blog_interface_';
import AppError from '../error/AppError';
import httpStatus from 'http-status';




const blogSchema = new Schema<T_blog>({
    title: {
        type: String,
        unique: true,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        enum: ["blogging", "writing", "personal", "Unknown"]
    },
    comments:{
        type: [Object]
    }
}, { timestamps: true });

blogSchema.pre('save', async function (next) {
    try {
        const existingBlog = await Blog.findOne({ title: this.title });

        if (existingBlog) {
            throw new AppError(httpStatus.BAD_REQUEST, 'This title is already in use');
        }
        next(); 
    } catch (error:any) {
        next(error); 
    }
});

export const Blog = model<T_blog>('blog', blogSchema);
