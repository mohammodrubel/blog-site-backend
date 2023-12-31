import { T_blog } from "../Interface/blog_interface_"
import { Blog } from "../model/blog_model_"

const createBlogService = async(payload:T_blog)=>{
    const result = await Blog.create(payload)
    return result
}
const getAllBlog = async()=>{
    const result = await Blog.find({})
    return result
}
const getSingleBlog = async(id:string)=>{
    const result = await Blog.findById(id)
    return result
}
const updateSingleBlog = async(id:string,payload:T_blog)=>{
    const result = await Blog.findByIdAndUpdate(
        id,
        payload,
        {new:true}
    )
    return result
}
const deleteSingleBlog = async(id:string)=>{
    const result = await Blog.findByIdAndDelete(
        id
    )
    return result
}



export const blogService = {
    createBlogService,
    getAllBlog,
    getSingleBlog,
    updateSingleBlog,
    deleteSingleBlog,
    // addSingleBlogComments
}