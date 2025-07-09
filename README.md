# 🧠 AI Message Generator

This is a small full-stack app I built to experiment with Firebase, authentication, and AI integration. It's meant to simulate a multi-agent message generator where different AI agents respond to a user's input.

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **Firebase Auth** (email & password)
- **Firestore** (database)
- **Tailwind CSS** (UI)
- **OpenAI API** (simulated AI responses)
- **TypeScript**

## 🔐 Features

- Sign up & sign in with Firebase Authentication
- Generate AI agent responses (fullstack & backend roles)
- Save user-generated messages to Firestore
- Display messages with a typing animation
- Simple protected routing

## 🧪 Why I Built It

This project was built to get hands-on experience with:

- Firebase Auth and protected user flows
- Persisting user-specific data to Firestore
- Dynamically displaying AI-generated content
- React state management and basic animations

## ⚠️ Notes

This is a work in progress. Some features (like auth state persistence and more advanced error handling) may be simplified or unfinished due to time constraints.  
The goal was to get something working end-to-end, and it does!

## 🚀 Run Locally

```bash
git clone https://github.com/Surefire10/message-generator.git
cd message-generator
npm install
npm run dev
