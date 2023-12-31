import httpStatus from "http-status";
import AppError from "../error/AppError";
import catchAsync from "../utils/catchAsync";
import { Request, NextFunction, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from "../config";
import { User } from "../model/user_model";
import { ROLE } from "../utils/globalInterface";

const auth = (...requiredRoles: ROLE) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    }

    try {
      const decoded = jwt.verify(token, config.access_token as string) as JwtPayload;
      const { role, _id } = decoded;
      const user = await User.findById(_id);

      if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
      }

      if (user.isDeleted === true) {
        throw new AppError(httpStatus.BAD_REQUEST, 'This user is deleted');
      }

      if (requiredRoles.length > 0 && !requiredRoles.includes(role)) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
      }

      req.user = decoded;
      next();
    } catch (error) {
      next(error);
    }
  });
};

export default auth;
