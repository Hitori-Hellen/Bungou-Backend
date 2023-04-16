const router = require("express").Router();
import * as ctrl from "./controllers";

router.get("/get", ctrl.getAllBook);
router.get("/get/id/:id", ctrl.getBookById);
router.get("/get/title/::title", ctrl.getBookByTitle);
router.get("/get/search/", ctrl.searchBookByTitle);
router.get("/test", ctrl.test);

export default router;
