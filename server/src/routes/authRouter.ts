import {Router} from "express";
import {register, login} from "../controllers/authController";
import {check} from 'express-validator'

const authRouter = Router()

authRouter.post('/register', [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6})
], register)
authRouter.post('/login', [
    check('email', 'Введите корректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists()
], login)
export default authRouter