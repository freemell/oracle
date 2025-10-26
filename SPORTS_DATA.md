# 🏈 Sports Data Integration

## ✅ What's Included

### Mock Data API (`/api/sports`)
All 16 sports categories now have populated data:
- ⭐ Top Events
- ⚽ Football (La Liga, Serie A)
- 🏀 Basketball (NBA)
- 🎾 Tennis (ATP Masters)
- 🏏 Cricket (IPL)
- 🥊 Boxing (Heavyweight Championship)
- 🏒 Ice Hockey (NHL)
- 🏈 American Football (NFL)
- 🏉 Rugby Union & League
- ⚔️ Dota 2 (Esports)
- 🎮 League of Legends (Esports)
- 🔫 Counter-Strike 2 (Esports)
- 🏐 Volleyball
- ⚾ Baseball (MLB)
- 🥋 MMA (UFC)

## 🔄 How It Works

1. **Select a sport** from the left sidebar
2. **API fetches data** for that sport
3. **Matches display** with odds
4. **Fallback** to mock data if API fails

## 🔗 Integration with Real APIs

### Option 1: TheOddsAPI (Recommended)
```bash
# Add to .env.local
THE_ODDS_API_KEY=your_api_key_here
```

Then update `app/api/sports/route.ts`:
```typescript
const response = await fetch(
  `https://api.the-odds-api.com/v4/sports/${sport}/odds?apiKey=${process.env.THE_ODDS_API_KEY}`
);
```

### Option 2: RapidAPI Sports APIs
Browse available APIs at: https://rapidapi.com/collection/sports-apis

### Option 3: Keep Using Mock Data
The current mock data provides realistic examples for testing.

## 📊 Data Structure

Each match includes:
```typescript
{
  id: number,
  league: string,
  team1: string,
  team2: string,
  time: string,
  date: string,
  odds1: number,  // Home team odds
  oddsX: number,   // Draw odds
  odds2: number    // Away team odds
}
```

## 🎯 Testing

Try clicking different sports in the sidebar to see:
- Loading states
- Different leagues
- Multiple matches per sport
- Real-time data fetching

## 💡 Tips

- **Add more matches**: Update `app/api/sports/route.ts`
- **Customize odds**: Modify the odds values
- **Add time filters**: Implement filtering by date/time
- **Cache data**: Add Redis or similar for performance

## 🚀 Ready to Use!

All sports are now populated with betting data!


