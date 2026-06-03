# AI-Powered Code Review & Debugger

## Overview

AI-Powered Code Review & Debugger is a web application designed primarily for beginner programmers who often struggle with syntax errors, logic mistakes, and debugging issues while learning to code.

Instead of spending hours trying to find errors, users can paste their code into the editor and receive instant AI-powered feedback, code reviews, and corrected versions of their code. The platform helps users understand where they went wrong and how to improve their coding skills.

## Problem Statement

Many beginners face challenges such as:

* Syntax errors
* Logic mistakes
* Poor coding practices
* Difficulty understanding compiler or runtime errors
* Lack of guidance when learning new programming languages

This project aims to simplify the debugging process and provide educational feedback that helps users learn while fixing their code.

## Features

### AI Code Review

* Analyze code instantly using AI.
* Detect syntax errors and logical issues.
* Receive detailed explanations and improvement suggestions.

### AI Code Fixing

* Automatically generate corrected versions of submitted code.
* Improve code quality and readability.

### Multi-Language Support

Supports multiple programming languages including:

* JavaScript
* Python
* Java
* C
* C++
* TypeScript

### Authentication

* Secure user authentication using Clerk.
* Personalized user experience.

### Chat History

* Save previous reviews and debugging sessions.
* Quickly revisit past code reviews.

### Share Reviews

* Share code reviews and feedback with others.

### Archive Reviews

* Archive important reviews for future reference.

### Delete Reviews

* Remove unwanted review history.

### Search History

* Search previous code review sessions.

### Dark & Light Mode

* Toggle between dark and light themes for a comfortable coding experience.

### Responsive Design

* Works across desktop and mobile devices.

## Tech Stack

### Frontend

* React.js
* Vite
* Framer Motion
* Axios
* PrismJS
* React Markdown

### Backend

* Node.js
* Express.js

### Authentication

* Clerk

### AI Integration

* Google Gemini API

## How It Works

1. Sign in using Clerk authentication.
2. Select a programming language.
3. Paste or write code in the editor.
4. Click "Review" to get AI-powered feedback.
5. Click "Fix Code" to generate a corrected version.
6. Save, archive, share, or revisit previous reviews from history.

## Live Demo

🔗 https://ai-powered-code-review-6adm.vercel.app/
---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/naga1914/AI-powered-code-review-
cd AI-Powered_code_Reviewer
```

---

### 2. Setup Frontend

```bash
cd Frontend
npm install
```

Create a `.env` file inside the Frontend folder:

```env
VITE_API_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Start the frontend:

```bash
node node_modules\vite\bin\vite.js 
```

---

### 3. Setup Backend

```bash
cd BackEnd
npm install
```

Create a `.env` file inside the BackEnd folder:

```env
GOOGLE_GEMINI_KEY=your_gemini_api_key
PORT=5000
```

Start the backend:

```bash
node server.js
```

---

## Screenshots

### Home Page

<img width="1919" height="873" alt="Screenshot 2026-06-03 182717" src="https://github.com/user-attachments/assets/cfac0f36-a3d3-40f7-a7fe-5f7f26872c3a" />
<img width="1884" height="857" alt="Screenshot 2026-06-03 182808" src="https://github.com/user-attachments/assets/eb669a7a-b667-4b66-b05b-0fd9f8645409" /


### AI Review Feature

<img width="1884" height="857" alt="Screenshot 2026-06-03 182808" src="https://github.com/user-attachments/assets/325989f3-b1cc-4fc8-995c-e88eca4ecdf5" />

### Fixed Code Output

<img width="863" height="712" alt="Screenshot 2026-06-03 182842" src="https://github.com/user-attachments/assets/50112427-20d3-446e-baaa-f6f078054471" />


### Chat History

<img width="1091" height="846" alt="Screenshot 2026-06-03 182927" src="https://github.com/user-attachments/assets/8419c82e-5870-4c06-9e73-32ac9d9ee14c" />

---

## Project Structure

```text
AI-Powered_code_Reviewer/
│
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env
│
├── BackEnd/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```


## Target Audience

* Beginner programmers
* Students learning programming
* Coding bootcamp learners
* Developers looking for quick code reviews
* Anyone who wants to improve coding skills through AI-powered feedback

## Author

Naga Rani Seelamneni
