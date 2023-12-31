"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const blogZodValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        author: zod_1.z.string(),
        date: zod_1.z.string(),
        image: zod_1.z.string(),
        content: zod_1.z.string(),
        tags: zod_1.z.enum(['blogging', 'writing', 'personal', 'Unknown'])
    }),
});
exports.default = blogZodValidation;
