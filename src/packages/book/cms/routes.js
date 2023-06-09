const router = require("express").Router();
import { authenticationAdmin } from "../../../middlewares/middlewareAdmin";
import * as ctrl from "./controller";
import * as ctrlWeb from "../controllers";

router.get("/", authenticationAdmin, ctrlWeb.getAllBook);
router.put("/:id", authenticationAdmin, ctrl.updateBook);
router.get("/:id", authenticationAdmin, ctrlWeb.getBookById);
export default router;
