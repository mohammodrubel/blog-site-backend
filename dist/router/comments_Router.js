"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsRouter = void 0;
const express_1 = __importDefault(require("express"));
const comments_controller_1 = require("../controller/comments_controller");
const router = express_1.default.Router();
router.post('/comments', comments_controller_1.CommentsController.createCommentes);
exports.commentsRouter = router;
