const router = require("express").Router();
import * as ctrl from "./controllers";

router.post("/create_payment_url", ctrl.createPaymentUrl);
router.get("/getvnpayipn", ctrl.getVnpayIpn);
router.get("/returnvnpay", ctrl.returnVnpay);

export default router;