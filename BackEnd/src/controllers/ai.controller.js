// ai.controller.js
const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    try {
        const response = await aiService.getReview(code); // Adjusted to use the aiService method
        res.send(response);
    } catch (error) {
        res.status(500).send("Error while reviewing the code");
    }
};

// Adding the fixCode method to handle the code-fixing request
module.exports.fixCode = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Code is required");
    }

    try {
        const fixedCode = await aiService.fixCode(code); // Call the fixCode method from aiService
        res.send(fixedCode);
    } catch (error) {
        res.status(500).send("Error while fixing the code");
    }
};
