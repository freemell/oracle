# Oracle - Solana Prediction Platform

A modern Next.js landing page for Oracle, a prediction site on the Solana blockchain featuring animated hero component with UnicornStudio integration.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
oracle/
├── app/                    # Next.js app directory
│   ├── betting/           # Betting page
│   │   └── page.tsx       # Betting interface
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   └── ui/                # UI components (shadcn style)
│       └── hero-ascii-one.tsx  # Hero animation component
├── lib/
│   └── api/
│       └── sports.ts      # Sports API functions
├── public/                # Static assets
└── logo.png              # Project logo
```

## 🎨 Features

- ✅ Next.js 15 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ shadcn/ui compatible structure
- ✅ Animated hero component with UnicornStudio
- ✅ Full betting interface with all sports
- ✅ Responsive design (mobile & desktop)
- ✅ Dark theme with purple accent (Solana theme)
- ✅ Betslip functionality
- ✅ Pre-Match and In-Play modes
- ✅ Real-time sports data ready (API integration guide included)
- ✅ Connect to Twitter/X
- ✅ Oracle prophetic theme throughout

## 🧩 Component Details

### hero-ascii-one.tsx

A full-screen hero component for Oracle prediction platform featuring:
- Background animation powered by UnicornStudio
- Mobile fallback with stars pattern
- Responsive design with breakpoints
- Technical/ASCII aesthetic with Solana purple theme
- Branding removal for cleaner presentation
- Call-to-action buttons linking to Twitter/X and betting app
- Solana blockchain branding
- Prophetic language ("Read the Portents")

### betting/page.tsx

Complete betting interface featuring:
- 16 sports categories with navigation
- Featured matches showcase
- Match listings with odds (1/X/2 format)
- Click-to-add betslip functionality
- Pre-Match and In-Play toggle
- Time filters (All, Today, Tomorrow, etc.)
- Oracle-themed design with purple accents
- Mock data included (real API integration guide provided)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🛠️ Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Component Library**: shadcn/ui compatible structure
- **Animation**: UnicornStudio.js

## 📄 License

MIT

