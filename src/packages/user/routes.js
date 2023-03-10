const router = require("express").Router();
import * as ctrl from "./controller";

router.post("/register", ctrl.register);
router.post("/login", ctrl.login);

export default router;
