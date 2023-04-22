const router = require("express").Router();
import * as ctrl from "./controllers";

router.get("/:id", ctrl.review);

export default router;
