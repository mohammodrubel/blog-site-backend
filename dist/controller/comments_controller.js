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
exports.CommentsController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const comments_service_1 = require("../service/comments_service");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const send_responce_1 = __importDefault(require("../utils/send_responce_"));
const createCommentes = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = req.body) === null || _a === void 0 ? void 0 : _a.id;
    const data = req.body.comments;
    const result = yield comments_service_1.CommentsService.createCommentsService(id, data);
    (0, send_responce_1.default)(res, ({
        success: true,
        statusCode: http_status_1.default.OK,
        messege: "Login Successfull",
        data: result
    }));
}));
exports.CommentsController = {
    createCommentes
};
