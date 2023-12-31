import httpStatus from "http-status";
import { CommentsService } from "../service/comments_service";
import catchAsync from "../utils/catchAsync";
import sendResponce from "../utils/send_responce_";

const createCommentes = catchAsync(async(req,res)=>{
    const id = req.body?.id 
    const data = req.body.comments
    const result = await CommentsService.createCommentsService(id,data)
    sendResponce(res,({
        success:true,
        statusCode:httpStatus.OK,
        messege: "Login Successfull",
        data:result
    }))
})


export const CommentsController = {
    createCommentes
}