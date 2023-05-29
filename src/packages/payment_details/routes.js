const router = require("express").Router();
import * as ctrl from "./controllers";

router.get("/", ctrl.getAllPayments);

export default router;
