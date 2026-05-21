<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=30&duration=3500&pause=900&color=7C3AED&center=true&vCenter=true&width=720&height=80&lines=Skynet+AI;Your+all-in-one+AI+content+platform;Chat+%E2%80%A2+Code+%E2%80%A2+Image+%E2%80%A2+Music+%E2%80%A2+Video" alt="Skynet AI" />

### 🤖 Five AI generation tools, one subscription

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

<a href="https://skynet-ai-tawny.vercel.app">
  <img src="https://img.shields.io/badge/Live_Demo-skynet--ai--tawny.vercel.app-7C3AED?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
</a>

</div>

---

## 🧭 Overview

**Skynet AI** is a full-featured AI SaaS platform that bundles five generation tools behind one clean dashboard. Chat with an AI assistant, generate code, create images, compose music, or produce video — all in one place. New users get a free trial quota, and a Pro subscription (billed through Stripe) unlocks unlimited usage.

## ✨ Features

- 💬 **Conversation** — chat with an AI assistant
- 👨‍💻 **Code generation** — generate code snippets with Markdown rendering
- 🖼️ **Image generation** — create images from text prompts
- 🎵 **Music generation** — turn prompts into audio
- 🎬 **Video generation** — generate short video clips
- 🎚️ **Free-tier counter** — track remaining free generations
- 💳 **Pro subscription** — unlimited access via Stripe billing
- 🔐 **Authentication** — managed sign-in/sign-up with Clerk
- 🛟 **Live support** — built-in Crisp customer chat

## 🛠️ Tech Stack

| Layer | Technologies |
| --- | --- |
| Framework | Next.js (App Router), React, TypeScript |
| Auth | Clerk |
| AI | OpenAI, Replicate |
| Database | Prisma ORM |
| State | Zustand |
| Payments | Stripe |
| Support | Crisp |
| UI | Tailwind CSS, Radix UI, shadcn/ui, Lucide |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- A database supported by Prisma
- Accounts for: Clerk, OpenAI, Replicate, Stripe

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Keshavkumar04/Skynet.git
cd Skynet

# 2. Install dependencies
npm install

# 3. Set up environment variables (see below)
cp .env.example .env

# 4. Apply the database schema
npx prisma db push

# 5. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env` file in the project root *(confirm exact key names against the source)*:

```env
DATABASE_URL=""

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""

# AI providers
OPENAI_API_KEY=""
REPLICATE_API_TOKEN=""

# Stripe
STRIPE_API_KEY=""
STRIPE_WEBHOOK_SECRET=""

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Crisp support chat
NEXT_PUBLIC_CRISP_WEBSITE_ID=""
```

## 📜 Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Run the production build |
| `npm run lint` | Lint the codebase |

## 📁 Project Structure

```
Skynet/
├── app/
│   ├── (auth)/        # Clerk sign-in / sign-up
│   ├── (dashboard)/   # Tool routes: code, conversation, image, music, video
│   ├── (landing)/     # Marketing landing page
│   └── api/           # Generation endpoints + Stripe webhook
├── components/        # UI components (incl. shadcn/ui)
├── hooks/             # Custom hooks (pro modal, etc.)
├── lib/               # API limits, Stripe, subscription, Prisma
└── prisma/            # Database schema
```

<div align="center">

---

Built with ⚡ by [**Keshav Kumar**](https://github.com/Keshavkumar04)

</div>
