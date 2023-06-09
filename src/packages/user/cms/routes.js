const router = require("express").Router();
import { authenticationAdmin } from "../../../middlewares/middlewareAdmin";
import * as ctrl from "./controller";

router.get("/", authenticationAdmin, ctrl.getAllUsers);
router.patch("/block/:id", authenticationAdmin, ctrl.blockUser);
router.get("/:id", authenticationAdmin, ctrl.getDetail);
export default router;
