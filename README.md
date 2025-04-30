
# 🧠 FitMind AI – Your Voice-Powered Fitness Companion

Welcome to **FitMind AI**, an intelligent, voice-first fitness assistant that adapts to you. Just speak — and let AI do the rest. FitMind AI generates personalized workout and meal plans through voice interaction, helping you stay consistent, motivated, and in control of your fitness journey.

---
## 🚀 Live Demo  
## [FitMind Ai](fit-mind-ai.vercel.app)
--- 
## 🌟 Highlights

- 🎙️ Voice-based sign-in and onboarding with AI agent
- 🏋️‍♂️ Personalized workout & meal plans updated weekly
- 📈 Interactive profile dashboard with plan history
- 🔧 Full account customization — update goals, preferences, and regenerate plans
- ⚡ Responsive UI for desktop and mobile

---

## 💡 Vision

**FitMind AI** solves the problem of generic, unmotivating fitness routines by offering a **real-time, AI-powered voice assistant** that adapts plans to your lifestyle, not the other way around.

---

## 🧱 Tech Stack

| Component             | Technology                                      |
|----------------------|--------------------------------------------------|
| Frontend             | Next.js, Tailwind CSS                            |
| Backend + Auth       | Convex (Real-time DB), Clerk (Auth & Functions)  |
| LLM + AI Engine      | Gemini 2.0 / GPT + LangChain                     |
| Voice Integration    | Whisper (STT), ElevenLabs (TTS)                  |
| Insight Module       | Custom AI pipelines built on LLM outputs         |
| Workflow Automation  | Vapi AI                                          |
| Hosting & DevOps     | Vercel                                           |

---

## 🔧 Setup & Installation Guide

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/fitmind-ai.git
cd fitmind-ai
```

---

### 2. Install Dependencies

Make sure you have **Node.js 18+** installed.

```bash
npm install
```

---

### 3. Setup Environment Variables

Create a `.env.local` file at the root of your project:

```bash
touch .env.local
```

Add the following:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_1234567890
CLERK_SECRET_KEY=sk_test_abcdefghij

# Convex Backend
NEXT_PUBLIC_CONVEX_URL=https://your-team.convex.cloud
CONVEX_DEPLOY_KEY=convex-deploy-key-here

# AI and Voice APIs
OPENAI_API_KEY=your_openai_or_gemini_key
NEXT_PUBLIC_ELEVENLABS_API_KEY=elevenlabs-api-key
VAPI_API_KEY=vapi-ai-api-key
```

---

### 4. Configure Convex (Backend)

If you're using [Convex](https://convex.dev):

```bash
npx convex dev
```

Make sure your project is linked to your Convex team, or use:

```bash
npx convex init
```

---

### 5. Configure Clerk (Authentication)

Go to [Clerk.dev](https://clerk.dev) and:

- Create a new project
- Get your **Publishable Key** and **Secret Key**
- Add web origin `http://localhost:3000` in Clerk dashboard

---

### 6. Run the App Locally

```bash
npm run dev
```

Now open [http://localhost:3000](http://localhost:3000) to use the app.

---

### 7. Deploy on Vercel

To deploy:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the GitHub repo
4. Add the same environment variables from `.env.local` in the **Vercel dashboard**
5. Deploy 🚀

---

## 📁 Project Structure

```
fitmind-ai/
├── app/                    # Next.js App Router
├── components/             # Reusable UI components
├── lib/                    # Convex, Clerk, AI, utils
├── public/                 # Static files
├── styles/                 # Tailwind config
├── convex/                 # Convex backend logic
├── .env.local              # Your env config
└── README.md
```

---

## ✅ Key Deliverables

- AI agent for capturing goals via **voice**
- Auto-generated **weekly plans** for workouts & meals
- **Dashboard** with past/current plans and insights
- **Editable goals and preferences** anytime
- Full **account settings** with plan regeneration
- Built with **Next.js**, **Clerk**, **Convex**, and **LLMs**

---

## 🛡️ License

Licensed under the [MIT License](LICENSE).

---

