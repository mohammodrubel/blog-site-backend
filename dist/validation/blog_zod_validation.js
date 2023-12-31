"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const updateblogZodValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        author: zod_1.z.string().optional(),
        date: zod_1.z.string().optional(),
        content: zod_1.z.string().optional(),
        tags: zod_1.z.enum(['blogging', 'writing', 'personal', 'Unknown']).optional(),
    }),
});
exports.default = updateblogZodValidation;
