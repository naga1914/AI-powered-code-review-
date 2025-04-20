#  AI-Powered Code Review – My First MERN Stack Journey

> “Every bug is a clue. Every error is a whisper. So, I listened… and built something smarter.”

##  The Idea Wasn’t Planned – It Was Felt

This project wasn’t born from a tutorial.  
It wasn’t built to follow a roadmap.  
It was born out of **frustration, curiosity, and a relentless ‘what if?’**

While diving into JavaScript, React, and backend logic, I ran into errors — not once or twice, but constantly. And not just bugs — **those "why is this even happening?" moments**. I didn’t just want to fix them. I wanted to **understand them**, intuitively, intelligently — like having a mentor sitting beside me.

That’s when the thought hit:  
**“What if I could build my own AI mentor?”**

So I did.

## 💡 Project Philosophy

This isn’t just a code review tool.  
It’s a **thought partner for developers.**  
An assistant that doesn't just throw red lines at your face, but tries to **explain**, **correct**, and **empower** your code journey — all with AI.

##  Key Features

-  Authentication with Clerk  
  Smooth, secure login and signup experience.

-  Home +  Main Pages  
  - Home: A minimal intro screen.  
  - Main: Where real dev magic happens.

- AI-Powered Code Fix & Review  
  Drop in your code. Choose a language. Let the AI explain and refine it.

- Light / Dark Mode Toggle  
  Because we code at 2 PM… and 2 AM.

- History Storage  
  Every review, saved — your learning journey, recorded.

- Share |  Delete |  Archive  
  Manage your code insights like a pro.

- Multi-Language Support  
  From JS to Python (and more coming) — choose your syntax, get your fix.

- ✨ **Google Gemini 2.0 Flash API**  
  Leveraging cutting-edge AI to deeply understand, review, and refactor code with speed and accuracy.

- 🌐 **Backend Endpoints**  
  - `POST /api/get-review` — AI returns review insights and improvements  
  - `POST /api/fix-code` — AI suggests a cleaned, corrected version of your code  

##  Tech Stack & Tools

- **Frontend**: React.js + Tailwind CSS + Framer Motion  
- **Backend**: Node.js + Express  
- **Database**: MongoDB with Mongoose  
- **Auth**: Clerk.dev  
- **AI**: OpenAI API & Google Gemini 2.0 Flash  
- **Vibes**: Clean UI, smooth animations, real-time feedback

##  Why This Project is Different

Most people build projects to tick boxes.  
I built this to **solve a feeling**.  

I didn’t just want to debug — I wanted to **learn why my code broke, how to fix it, and how not to break it again**. So instead of copy-pasting a solution, this platform encourages devs to **think, read, and reason** with AI.

This isn't just a project.  
It's a **conversation between developer and machine.**  
And it's just the beginning.

## 🛠️ How to Run

```bash
# Clone the repo
git clone https://github.com/naga1914/AI-powered-code-review-

# Client Setup
cd Frontend
npm install
npm run dev

# Server Setup
cd ../BackEnd
npm install
node server.js

