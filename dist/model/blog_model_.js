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
exports.Blog = void 0;
const mongoose_1 = require("mongoose");
const AppError_1 = __importDefault(require("../error/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    image: {
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
    comments: {
        type: [Object]
    }
}, { timestamps: true });
blogSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const existingBlog = yield exports.Blog.findOne({ title: this.title });
            if (existingBlog) {
                throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'This title is already in use');
            }
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
exports.Blog = (0, mongoose_1.model)('blog', blogSchema);
