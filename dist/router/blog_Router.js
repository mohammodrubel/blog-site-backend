"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const express_1 = __importDefault(require("express"));
const blog_Controller_1 = require("../controller/blog_Controller_");
const Check_Validation_1 = __importDefault(require("../Middleware/Check_Validation"));
const blog_zod_validation_1 = __importDefault(require("../validation/blog_zod_validation_"));
const blog_zod_validation_2 = __importDefault(require("../validation/blog_zod_validation"));
const router = express_1.default.Router();
router.post('/create-blog', (0, Check_Validation_1.default)(blog_zod_validation_1.default), blog_Controller_1.BlogController.createBlogController);
router.get('/', blog_Controller_1.BlogController.getAllBlogController);
router.get('/:id', blog_Controller_1.BlogController.getSingleBlogController);
router.put('/:id', (0, Check_Validation_1.default)(blog_zod_validation_2.default), blog_Controller_1.BlogController.updateBlogController);
router.delete('/:id', blog_Controller_1.BlogController.deleteSingleBlogController);
exports.blogRouter = router;
