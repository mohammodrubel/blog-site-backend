import httpStatus from "http-status";
import { blogService } from "../service/blog_service_";
import catchAsync from "../utils/catchAsync";
import sendResponce from "../utils/send_responce_";

const createBlogController = catchAsync(async(req,res)=>{
    const result = await blogService.createBlogService(req.body)
    sendResponce(res,({
        success:true,
        statusCode:httpStatus.CREATED,
        messege:'Create New Blog Successfull',
        data:result
    }))
})
const getAllBlogController = catchAsync(async(req,res)=>{
    const result = await blogService.getAllBlog()
    sendResponce(res,({
        success:true,
        statusCode:httpStatus.OK,
        messege: "Get All Blogs Shown Successfully",
        data:result
    }))
})
const getSingleBlogController = catchAsync(async(req,res)=>{
    const {id} = req.params
    const result = await blogService.getSingleBlog(id)
    sendResponce(res,({
        success:true,
        statusCode:httpStatus.OK,
        messege: "Get All Blogs Shown Successfully",
        data:result
    }))
})
const updateBlogController = catchAsync(async(req,res)=>{
    const {id} = req.params
    const result = await blogService.updateSingleBlog(id,req.body)
    sendResponce(res,({
        success:true,
        statusCode:httpStatus.OK,
        messege: "Update  Successfully",
        data:result
    }))
})
const deleteSingleBlogController = catchAsync(async(req,res)=>{
    const {id} = req.params
    const result = await blogService.deleteSingleBlog(id)
    sendResponce(res,({
        success:true,
        statusCode:httpStatus.OK,
        messege: "Delete blog  Successfully",
        data:result
    }))
})



export const BlogController = {
    createBlogController,
    getAllBlogController,
    getSingleBlogController,
    updateBlogController,
    deleteSingleBlogController
}