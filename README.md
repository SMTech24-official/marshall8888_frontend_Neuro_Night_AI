# 🎉 EGEAL AI Hub

**Discover the Next Viral AI Tools — or Get Paid to Help Launch Them**  
*Find the Right Project or Investor to Build Your AI Empire*

EGEAL AI Hub is an AI-powered affiliate marketing platform where **Founders** can add affiliate tools or their own products (like ChatGPT, Grok, etc.), launch promotional campaigns and giveaways, and collaborate with **Influencers** who promote these tools through social media content. **Users** can explore, click, and purchase these tools. **Admins** ensure smooth operation by moderating content, verifying participants, and selecting winners when needed.

🌐 **Live Site:** [https://egeal-ai-hub-frontend.vercel.app/](https://egeal-ai-hub-frontend.vercel.app/)

---

## 🚀 Features

- ✅ Role-based login system (Founder, Influencer, User, Admin)
- 🔧 Founders can manage tools, promotions, and giveaways
- 🎥 Influencers join giveaways and generate affiliate links
- 💸 Users can browse, click, and purchase tools
- 🧠 AI scoring system for giveaway participants
- 📊 Admin dashboard for full moderation and analytics
- 💬 Built-in chat between Founder & Influencer
- ✉️ Email notifications on key actions (payment, giveaway results)

---

## 👥 User Roles

### 🧑‍⚖️ Admin
- Full control over tools, giveaways, user submissions
- Can select giveaway winners if Founders are inactive
- Platform metrics and dashboard access

### 🧑‍💼 Founder
- Add and manage tools (affiliate or owned)
- Launch, edit, or cancel giveaways
- Create and manage promotions
- Select giveaway winners
- Chat with Influencers

### 🎥 Influencer
- Join giveaways and upload proof (video + screenshot)
- Generate affiliate links for tools
- Track performance, win status
- Chat with Founders

### 👤 User
- View tools and promotions
- Purchase tools (with optional referral/affiliate)
- Receive email upon successful purchase

---

## 🧩 Modules Overview

### 🔐 1. Authentication System
- Role-based login & signup (JWT protected)
- Each role has access to different pages/features

### 🛠️ 2. Tool Management
- Founders can:
  - Upload affiliate or owned tools
  - Add details: name, description, image, pricing, and type
- Tools are used in promotions and giveaways
- Influencers and Users can view tools

### 🔗 3. Affiliate Tracking
- Influencers generate affiliate links
- System tracks:
  - Number of clicks
  - Affiliate source (Influencer)
  - Tool conversion
- Founders see affiliate insights

### 💳 4. Payment System
- Users can purchase tools (external or internal checkout)
- On successful payment:
  - Founder, Influencer (if referral), and Buyer receive confirmation email
  - System logs purchase and referral bonus (if any)

### 🎁 5. Giveaway Management
- Founders can:
  - Create giveaways (prize, rules, cover, deadline)
  - Edit or cancel giveaways
- Influencers:
  - Join by uploading proof (video link + screenshot)
  - Participation status: pending → verified → winner
- Winner selection:
  - Manual (Founder/Admin) or Random (System Bot)

### 📣 6. Promotions Module
- Founders and Influencers can:
  - Launch tool-specific promotions
  - Set campaign start/end date
  - Cancel or edit promotion
- Promotions are displayed on public feed

### 🧠 7. AI-Powered Scoreboard
- Influencer submissions can be scored based on:
  - Engagement, quality, or AI-assessed metrics
- Used to determine winner rankings
- Displayed inside the giveaway detail view

### 💬 8. Chat System
- Real-time chat between Founders and Influencers
- Encourages better collaboration and campaign planning

### 🛡️ 9. Admin Panel
- Approve/reject:
  - Tools, giveaways, influencer proofs
- View platform metrics, user activity, payment records
- Manually assign giveaway winners

### 📊 10. Dashboard (MVP Stage)
- **Founder Dashboard:**
  - See number of tools, giveaways, participants
  - Monitor affiliate link clicks and purchases
- **Influencer Dashboard:**
  - Track ongoing/past giveaways
  - Submission status and score
- **Admin Dashboard:**
  - Platform stats, flagged users, unresolved issues

---

## 🏗️ Project Structure (Frontend)

```bash
/src
  ├── app/                 # Next.js routing and layout
  │   ├── (commonLayout)/  # Shared layout components
  │   ├── chat-box/        # Chatbox feature directory
  │   ├── favicon.ico
  │   ├── globals.css
  │   └── layout.tsx       # Main layout file

  ├── assets/              # Static assets (images, logos, etc.)
  ├── component/           # Reusable UI components
  ├── context/             # React contexts (auth, theme, etc.)
  ├── feature/             # Page-level features (e.g., giveaway, dashboard)
  ├── hooks/               # Custom React hooks
  ├── lib/                 # Utilities or shared logic
  ├── providers/           # Provider wrappers (theme, session, etc.)
  ├── redux/               # Redux setup and slices
  ├── services/            # API call handlers (Axios/Fetch clients)
  ├── types/               # TypeScript types and interfaces
  └── utils/               # Utility functions

# Other Project Files
.eslintrc.mjs               # ESLint configuration
.next.config.ts             # Next.js config file
.package.json               # Project dependencies and scripts
.tsconfig.json              # TypeScript config
.README.md                  # Project documentation

```

## Getting Started
- Follow these steps to set up and run the project locally:

1. 📦 Clone the Repository
```base
git clone https://github.com/SMTech24-official/marshall8888_frontend_Neuro_Night_AI.git
cd marshall8888_frontend_Neuro_Night_AI
```

2. 📥 Install Dependencies
```base
npm install
```

Note: You might see some warnings for deprecated packages — we’re aware and actively working on improving package health.
---

3. 🛠️ Configure Environment Variables

- Create a .env.local file in the root directory and add the necessary environment variables:
  
```bash
# API Configuration
NEXT_PUBLIC_URL=<your_backend_url>
         

# Image Upload Service
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_api_key_here          # ImgBB API key
```

4. 🚀 Run the Development Server
```base
npm run dev
```

## Your app should now be running at:
```base
 http://localhost:3000
```

## 🧪 Build for Production
To build the project for production:
```base
npm run build
```

## To preview the production build:
```base
npm run start
```
---

## 🧪 Tech Stack

| Layer       | Technology              |
|-------------|--------------------------|
| Frontend    | Next.js + redux + ts     |
| Backend     | Node.js + Express        |
| Database    | MongoDB + Mongoose       |
| Auth        | JWT                      |
| Media Upload | Cloudinary               |
| Validation  | Zod                      |
| Styling     | TailwindCSS              |

---

## 📜 License

This project is developed under EGEAL’s internal MVP license.  
**Not for public redistribution or commercial use without permission.**

---

## 👥 Team & Vision

Developed by the **EGEAL Platform** team to empower founders, creators, and marketers.  
Our goal is to create a **smart, viral, and trustworthy** ecosystem for launching and monetizing AI tools using community-driven affiliate promotions.

Let’s make your AI tool the next big thing.

---

