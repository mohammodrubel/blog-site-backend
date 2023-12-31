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
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../error/AppError"));
const user_model_1 = require("../model/user_model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../config"));
const authUtils_1 = require("../utils/authUtils");
const createService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.create(payload);
    return result;
});
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.find();
    return result;
});
const getSingleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findById(id);
    return result;
});
const deleteSingleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findByIdAndUpdate(id, { isDeleted: true });
    return result;
});
const loginService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ email: payload.email });
    //is user exist
    if (!user) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'user not found!');
    }
    //checking is user is deleted
    if (user.isDeleted === true) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'this user is deleted!');
    }
    //checking if the password is correct
    const checkPassword = yield bcrypt_1.default.compare(payload.password, user.password);
    if (!checkPassword) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, 'Incorrect email and password');
    }
    const userInforamtion = {
        _id: user._id,
        email: user === null || user === void 0 ? void 0 : user.email,
        role: user === null || user === void 0 ? void 0 : user.role,
        isDeleted: user === null || user === void 0 ? void 0 : user.isDeleted
    };
    console.log(user);
    const accessToken = (0, authUtils_1.createToken)(userInforamtion, config_1.default.access_token, '10d');
    const refreshToken = (0, authUtils_1.createToken)(userInforamtion, config_1.default.refresh_token, '10d');
    return {
        user,
        accessToken,
        refreshToken
    };
});
exports.AuthService = {
    createService,
    getAllUsersService,
    getSingleService,
    deleteSingleService,
    loginService
};
