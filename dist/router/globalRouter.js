"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blog_Router_1 = require("./blog_Router");
const auth_Router_1 = require("./auth_Router");
const comments_Router_1 = require("./comments_Router");
const router = (0, express_1.Router)();
const myRouter = [
    { path: '/blog', route: blog_Router_1.blogRouter },
    { path: '/auth', route: auth_Router_1.userRouter },
    { path: '/blog', route: comments_Router_1.commentsRouter },
];
myRouter.forEach((route) => router.use(route.path, route.route));
exports.default = router;
