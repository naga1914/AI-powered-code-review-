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

```md

```

### AI Review Feature

```md
![AI Review](./screenshots/review.png)
```

### Fixed Code Output

```md
![Fixed Code](./screenshots/fixed-code.png)
```

### Chat History

```md
![History](./screenshots/history.png)
```

---

## Demo Video

Upload your demo video to YouTube and add:

```md
## Demo Video

[Watch Demo](https://youtube.com/watch?v=YOUR_VIDEO_ID)
```

Or upload an MP4 inside GitHub:

```md
## Demo Video

https://github.com/user-attachments/assets/your-video-link
```

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
