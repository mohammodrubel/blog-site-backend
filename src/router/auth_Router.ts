import express from 'express'
import { AuthController } from '../controller/user_Controller'
import CheckValidation from '../Middleware/Check_Validation'
import UserSchemaValidation from '../validation/user_zod_validation_'
import loginValidation from '../validation/user_zod_login_validation'
import auth from '../Middleware/Auth'
import { ROLE_TYPE, ROLE } from '../utils/globalInterface';


const router = express.Router()

router.post(
  '/create-user',
  CheckValidation(UserSchemaValidation),
  AuthController.createUserController,
)
router.post(
  '/login',
  CheckValidation(loginValidation),
  AuthController.loginController,
)
router.get('/user',auth(ROLE_TYPE.Admin), AuthController.getAllUserController);
router.get('/user/:id',auth(ROLE_TYPE.Admin), AuthController.getSingleController)
router.delete('/user/:id',auth(ROLE_TYPE.Admin),AuthController.deleteUserController)

export const userRouter = router
