# 🚀 Quick Start Guide

## ✅ What's Ready

Your Oracle betting platform is set up with:

- ✅ Landing page with animated hero (`/`)
- ✅ Betting page with all sports (`/betting`)
- ✅ Oracle-themed dark purple design
- ✅ All 16 sports categories included
- ✅ Mock data for testing
- ✅ Betslip functionality
- ✅ Responsive design

## 🎯 Immediate Next Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

### 3. View Your App

- **Landing Page**: http://localhost:3000
- **Betting Page**: http://localhost:3000/betting

## 📝 Configure Real-Time Data (Optional)

Currently using mock data. To add real-time sports data:

1. **Sign up** for TheOddsAPI: https://the-odds-api.com/
2. **Get API key** from dashboard
3. **Create** `.env.local` file:
   ```env
   NEXT_PUBLIC_SPORTS_API_KEY=your_api_key_here
   ```
4. **Update** `app/betting/page.tsx` to use the API functions from `lib/api/sports.ts`

See `API_INTEGRATION_GUIDE.md` for detailed instructions.

## 🎨 Current Features

### Landing Page
- Animated background (UnicornStudio)
- "PREDICT THE FUTURE" hero text
- "FOLLOW OUR X" button (update Twitter URL)
- "READ THE PORTENTS" button → links to betting page
- Oracle-themed purple gradient

### Betting Page
- **Left Sidebar**: Sport categories (all 16 sports)
- **Main Content**: Match listings with odds
- **Right Sidebar**: Betslip
- **Features**: 
  - Pre-Match / In-Play toggle
  - Time filters (All, Today, Tomorrow, etc.)
  - Featured matches showcase
  - Click-to-add to betslip
  - "PLACE PROPHECY" button

## 🔗 URLs to Update

### Twitter/X Link
**File**: `components/ui/hero-ascii-one.tsx` (line ~195)

```tsx
href="https://twitter.com"  // Change to your Twitter handle
```

### Betting App Link
Already configured to `/betting` ✅

## 🏈 Available Sports

All sports are included in the sidebar:
- ⭐ Top Events
- ⚽ Football
- 🏀 Basketball
- 🎾 Tennis
- 🏏 Cricket
- 🥊 Boxing
- 🏒 Ice Hockey
- 🏈 American Football
- 🏉 Rugby Union
- 🏉 Rugby League
- ⚔️ Dota 2
- 🎮 League of Legends
- 🔫 Counter-Strike 2
- 🏐 Volleyball
- ⚾ Baseball
- 🥋 MMA

## 🛠️ Project Structure

```
oracle/
├── app/
│   ├── betting/
│   │   └── page.tsx          # Betting interface
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Landing page
│   └── globals.css            # Global styles
├── components/
│   └── ui/
│       └── hero-ascii-one.tsx # Hero component
├── lib/
│   └── api/
│       └── sports.ts          # Sports API functions
├── package.json
└── tailwind.config.ts
```

## 🎯 Next Development Steps

1. **Add API Integration** (see `API_INTEGRATION_GUIDE.md`)
2. **Connect Wallet** functionality (Solana wallet adapter)
3. **Real Betting Logic** (smart contracts integration)
4. **User Authentication**
5. **Bet History** page
6. **Admin Dashboard**

## 📚 Documentation

- `API_INTEGRATION_GUIDE.md` - Real-time sports data setup
- `README.md` - Project overview
- `SETUP_INSTRUCTIONS.md` - Initial setup details
- `URLS_TO_UPDATE.md` - Configuration checklist

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
npm run dev -- -p 3001
```

### TypeScript Errors
```bash
npm run build
# Fix any errors shown
```

### Styling Issues
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## ✨ Key Design Elements

- **Theme**: Dark purple gradient (Solana-inspired)
- **Typography**: Monospace font (font-mono)
- **Colors**: Purple accents on black background
- **Language**: Prophetic/Oracle themed ("Read the Portents", "PLACE PROPHECY")
- **Icons**: Emoji-based for sports

## 🎉 You're Ready!

Your Oracle prediction platform is ready to use. Start with `npm install` and `npm run dev` to see it in action!

For questions or issues, refer to the detailed guides in the documentation files.


