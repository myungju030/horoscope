const { dataController } = require("../controller");
const { findByKeyword } = dataController;
const express = require("express");
const router = express.Router();

router.get("/:keyword", findByKeyword);

module.exports = router;
