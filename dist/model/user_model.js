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
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const AppError_1 = __importDefault(require("../error/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        unique: [true, 'This email is already in use'],
        required: [true, 'Email is required'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false
    },
    role: {
        type: String,
        enum: ['Admin', 'User', 'Modarator'],
        required: true
    }
}, { timestamps: true });
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const saltRounds = 12;
            const hashingPassword = yield bcrypt_1.default.hash(this.password, saltRounds);
            this.password = hashingPassword;
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const existingEmail = yield exports.User.findOne({ email: this.email });
            if (existingEmail) {
                throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'This email already exists');
            }
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
exports.User = (0, mongoose_1.model)('user', userSchema);
