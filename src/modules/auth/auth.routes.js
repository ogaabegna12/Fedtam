import { Router } from "express";

import {
    register,
    verifyOtp,
    login,
    logout,
    me
} from "./auth.controller.js";

import authMiddleware from "../../middleware/auth.middleware.js";

const router = Router();

router.post("/register", register);

router.post("/verify-otp", verifyOtp);

router.post("/login", login);

router.post("/logout", authMiddleware, logout);

router.get("/me", authMiddleware, me);

export default router;
