import { Router } from "express";
import {
  refreshToken,
  login,
  logout,
  signup,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/signup", signup);

router.post("/signin", login);

router.post("/signout", logout);

router.post("/refresh-token", refreshToken);

export default router;
