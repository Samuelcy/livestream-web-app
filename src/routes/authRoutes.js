import express from 'express';
import { postLogin, postRegister } from '../controllers/controllers.js';

const router = express.Router()

// router.post('/register', (req, res) => {
//     return res.send("Register route");
// });

router.post("/register", postRegister);

// router.post('/login', (req, res) => {
//     return res.send("Login route");
// });

router.post("/login", postLogin);



export default router;