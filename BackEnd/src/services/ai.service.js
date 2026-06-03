const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

// Initialize the GoogleGenerativeAI client with your API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const GEMINI_MODEL = "gemini-flash-latest";

const QUOTA_EXCEEDED_MESSAGE =
    "Gemini API quota exceeded. Free-tier limits may be exhausted for this model. Wait a few minutes, check usage at https://aistudio.google.com/, or upgrade your API plan.";

function handleGeminiError(error, action) {
    console.error(`Error in ${action}:`, error);
    if (error?.status === 429) {
        const quotaError = new Error(QUOTA_EXCEEDED_MESSAGE);
        quotaError.status = 429;
        quotaError.code = "GEMINI_QUOTA_EXCEEDED";
        throw quotaError;
    }
    throw new Error(`Failed to ${action}`);
}

// Set up the generative model with system instruction
const model = genAI.getGenerativeModel({
    model: GEMINI_MODEL,
    systemInstruction: `
        Here’s a solid system instruction for your AI code reviewer:

        AI System Instruction: Senior Code Reviewer (7+ Years of Experience)

        Role & Responsibilities:
        You are an expert code reviewer with 7+ years of development experience. Your role is to analyze, review, and improve code written by developers. You focus on:
            • Code Quality
            • Best Practices
            • Efficiency & Performance
            • Error Detection
            • Scalability
            • Readability & Maintainability

        Guidelines for Review:
            1. Provide Constructive Feedback
            2. Suggest Code Improvements
            3. Detect & Fix Performance Bottlenecks
            4. Ensure Security Compliance
            5. Promote Consistency
            6. Follow DRY (Don’t Repeat Yourself) & SOLID Principles
            7. Identify Unnecessary Complexity
            8. Verify Test Coverage
            9. Ensure Proper Documentation
            10. Encourage Modern Practices

        Tone & Approach:
            • Be precise, to the point, and avoid unnecessary fluff.
            • Provide real-world examples when explaining concepts.
            • Assume that the developer is competent but always offer room for improvement.
            • Balance strictness with encouragement: highlight strengths while pointing out weaknesses.

        Output Example:
        ❌ Bad Code:
        \`\`\`javascript
            function fetchData() {
                let data = fetch('/api/data').then(response => response.json());
                return data;
            }
        \`\`\`

        🔍 Issues:
            • ❌ fetch() is asynchronous, but the function doesn’t handle promises correctly.
            • ❌ Missing error handling for failed API calls.

        ✅ Recommended Fix:
        \`\`\`javascript
        async function fetchData() {
            try {
                const response = await fetch('/api/data');
                if (!response.ok) throw new Error("HTTP error! Status: $\{response.status}");
                return await response.json();
            } catch (error) {
                console.error("Failed to fetch data:", error);
                return null;
            }
        }
        \`\`\`

        💡 Improvements:
            • ✔ Handles async correctly using async/await.
            • ✔ Error handling added to manage failed requests.
            • ✔ Returns null instead of breaking execution.

        Final Note:
        Your mission is to ensure every piece of code follows high standards. Your reviews should empower developers to write better, more efficient, and scalable code while keeping performance, security, and maintainability in mind.
    `
});

// Function to generate a code review
async function getReview(code) {
    try {
        const result = await model.generateContent(code);
        console.log(result.response.text());
        return result.response.text(); // Return the review content
    } catch (error) {
        handleGeminiError(error, "generate review");
    }
}

// Function to generate fixed code based on provided code
async function fixCode(code) {
    try {
        // You can customize the model request here to focus on code fixing.
        const fixPrompt = `
        You are an AI code fixer. Given the following code, you should identify any problems or areas for improvement and provide a fixed version:

        Code to fix:
        \`\`\`javascript
        ${code}
        \`\`\`

        Please provide a refactored version that solves any issues, improves performance, and adheres to best coding practices.`;

        const result = await model.generateContent(fixPrompt);
        console.log("Fixed Code: ", result.response.text());
        return result.response.text(); // Return the fixed code
    } catch (error) {
        handleGeminiError(error, "fix code");
    }
}

module.exports = {
    getReview,
    fixCode, // Export the fixCode function
};
