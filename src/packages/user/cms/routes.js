const router = require("express").Router();
// import { authentication } from "../../middlewares/authMiddleware";
import * as ctrl from "./controller";

router.get("/", ctrl.getAllUsers);
export default router;
