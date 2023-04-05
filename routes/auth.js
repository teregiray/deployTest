import { Router } from "express";
import { register, login, getMe} from '../controllers/auth.js';
const router = new Router();

// REG
// http://localhost:3002/api/auth/register
router.post('/register', register)
// LOG
router.post('/login', login)
// GET
router.post('/me', getMe)
