"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const commentsValidation = zod_1.z.object({
    id: zod_1.z.string(),
    body: zod_1.z.object({
        email: zod_1.z.string(),
        content: zod_1.z.string()
    })
});
exports.default = commentsValidation;
