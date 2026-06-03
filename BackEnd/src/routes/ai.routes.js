// ai.routes.js
const express = require('express');
const aiController = require("../controllers/ai.controller");

const router = express.Router();

// Route to get review of the code
router.post("/get-review", aiController.getReview);

// Route to fix the code
router.post("/fix-code", aiController.fixCode); // Added the new route for fixing code

module.exports = router;
