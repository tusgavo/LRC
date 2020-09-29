const express = require("express");
const router = express.Router();

const viewsRoute = require("./viewsRoutes");
router.use('/', viewsRoute);

module.exports = router;