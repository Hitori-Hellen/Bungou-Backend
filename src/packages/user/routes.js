const router = require("express").Router();
import { authentication } from "../../middlewares/authMiddleware";
import * as ctrl from "./controller";

router.post("/register", ctrl.register);
router.post("/login", ctrl.login);
router.get("/info", authentication, ctrl.getInfo);
router.put("/changePwd", authentication, ctrl.changePwd);
export default router;
