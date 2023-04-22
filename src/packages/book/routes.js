const router = require("express").Router();
import * as ctrl from "./controllers";

router.get("/", ctrl.getAllBook);
router.get("/:id", ctrl.getBookById);
router.get("/search/", ctrl.searchBookByTitle);
router.get("/review/:id", ctrl.review);

export default router;
