import express from 'express'
import ExpressValidation from "express-joi-validation"
import Joi from 'joi'
import { verifyToken } from "../middlewares/auth.js"
import { getChannelSettings } from "../controllers/controllers.js"

const router = express.Router();

const validator = ExpressValidation.createValidator({});

router.get('/:channelId', verifyToken, getChannelSettings);

export default router;