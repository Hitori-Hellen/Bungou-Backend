const router = require("express").Router();
import * as ctrl from "./controller";

router.post("/register", ctrl.register
    /* #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Add a user',
        schema: { $ref: '#/definitions/AddUser' }
} */
);
router.post("/login", ctrl.login
    /* #swagger.parameters['user'] = {
        in: 'body',
        description: 'Access user',
        schema: { $ref: '#/definitions/LoginUser' }
} */
);

export default router;
