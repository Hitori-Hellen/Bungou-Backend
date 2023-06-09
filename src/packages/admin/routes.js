const router = require("express").Router();
import * as ctrl from "./controllers";

router.post("/login", ctrl.loginAdmin);
router.post("/register", ctrl.registerAdmin);

export default router;
