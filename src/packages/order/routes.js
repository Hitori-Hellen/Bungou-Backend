const router = require("express").Router();
import * as ctrl from "./controllers";

router.get("/create_payment_url", ctrl.createPaymentUrl);

export default router;