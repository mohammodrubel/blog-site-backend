"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const blog_service_1 = require("../service/blog_service_");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const send_responce_1 = __importDefault(require("../utils/send_responce_"));
const createBlogController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.blogService.createBlogService(req.body);
    (0, send_responce_1.default)(res, ({
        success: true,
        statusCode: http_status_1.default.CREATED,
        messege: 'Create New Blog Successfull',
        data: result
    }));
}));
const getAllBlogController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.blogService.getAllBlog();
    (0, send_responce_1.default)(res, ({
        success: true,
        statusCode: http_status_1.default.OK,
        messege: "Get All Blogs Shown Successfully",
        data: result
    }));
}));
const getSingleBlogController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield blog_service_1.blogService.getSingleBlog(id);
    (0, send_responce_1.default)(res, ({
        success: true,
        statusCode: http_status_1.default.OK,
        messege: "Get All Blogs Shown Successfully",
        data: result
    }));
}));
const updateBlogController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield blog_service_1.blogService.updateSingleBlog(id, req.body);
    (0, send_responce_1.default)(res, ({
        success: true,
        statusCode: http_status_1.default.OK,
        messege: "Update  Successfully",
        data: result
    }));
}));
const deleteSingleBlogController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield blog_service_1.blogService.deleteSingleBlog(id);
    (0, send_responce_1.default)(res, ({
        success: true,
        statusCode: http_status_1.default.OK,
        messege: "Delete blog  Successfully",
        data: result
    }));
}));
exports.BlogController = {
    createBlogController,
    getAllBlogController,
    getSingleBlogController,
    updateBlogController,
    deleteSingleBlogController
};
