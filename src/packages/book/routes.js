const router = require("express").Router();
import * as ctrl from "./controllers";
const multer = require('multer');

const upload = multer({ dest: 'upload/' });

router.get("/", ctrl.getAllBook);
router.get("/:id", ctrl.getBookById);
router.get("/review/:id", ctrl.review);
router.post("/upload", upload.single('upload'), ctrl.upload);
export default router;
