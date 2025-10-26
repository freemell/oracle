# 🏈 Real-Time Sports Data Integration Guide

## Overview

This guide explains how to integrate real-time sports data into your Oracle betting platform.

## 📋 Recommended APIs

### 1. **TheOddsAPI** (Recommended for Betting Odds)
- **URL**: https://the-odds-api.com/
- **Features**: Live odds from multiple bookmakers
- **Coverage**: NFL, NBA, MLB, NHL, Soccer, Tennis, MMA, etc.
- **Free Tier**: 500 requests/month
- **Pricing**: Free tier available, then ~$10/month

**Example Endpoint:**
```
https://api.the-odds-api.com/v4/sports/soccer/odds?regions=us&markets=h2h&oddsFormat=decimal&apiKey=YOUR_API_KEY
```

### 2. **RapidAPI Sports APIs**
- **URL**: https://rapidapi.com/collection/sports-apis
- **Multiple APIs**: Choose from various providers
- **Coverage**: All major sports
- **Pricing**: Varies by API

**Popular Options:**
- **SportsData.io**: Comprehensive sports data
- **API-Football**: Extensive football/soccer coverage
- **TheSportsDB**: Free sports database

### 3. **Sportradar** (Enterprise)
- **URL**: https://sportradar.com/
- **Features**: Official data from major leagues
- **Coverage**: Professional-grade data
- **Pricing**: Enterprise pricing (contact for quote)

## 🚀 Implementation Steps

### Step 1: Install Required Dependencies

```bash
npm install axios
# or if using fetch (built-in)
# No installation needed
```

### Step 2: Create API Service

Create `lib/api/sports.ts`:

```typescript
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_SPORTS_API_KEY;
const BASE_URL = 'https://api.the-odds-api.com/v4';

export interface Match {
  id: string;
  sport_key: string;
  home_team: string;
  away_team: string;
  commence_time: string;
  bookmakers: Bookmaker[];
}

export interface Bookmaker {
  key: string;
  title: string;
  markets: Market[];
}

export interface Market {
  key: string;
  outcomes: Outcome[];
}

export interface Outcome {
  name: string;
  price: number;
}

export async function getSportsOdds(sport: string) {
  try {
    const response = await axios.get(`${BASE_URL}/sports/${sport}/odds`, {
      params: {
        regions: 'us',
        markets: 'h2h',
        oddsFormat: 'decimal',
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching sports data:', error);
    throw error;
  }
}

export async function getAvailableSports() {
  try {
    const response = await axios.get(`${BASE_URL}/sports`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching sports list:', error);
    throw error;
  }
}
```

### Step 3: Add Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SPORTS_API_KEY=your_api_key_here
```

### Step 4: Update Betting Page to Use Real Data

Modify `app/betting/page.tsx`:

```typescript
'use client';

import { useState, useEffect } from 'react';
import { getSportsOdds, Match } from '@/lib/api/sports';

export default function BettingPage() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSport, setSelectedSport] = useState('soccer');

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setLoading(true);
        const data = await getSportsOdds(selectedSport);
        setMatches(data);
      } catch (error) {
        console.error('Failed to fetch matches:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
    
    // Refresh every 60 seconds
    const interval = setInterval(fetchMatches, 60000);
    return () => clearInterval(interval);
  }, [selectedSport]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="font-mono">⚱️ Loading prophecies...</div>
      </div>
    );
  }

  // Rest of your component...
}
```

## 🎯 Sports Coverage

Based on your requirements, here are the sport keys for TheOddsAPI:

| Sport | API Key | Your Icon |
|-------|---------|-----------|
| Football (Soccer) | `soccer` | ⚽ |
| Basketball | `basketball_nba` | 🏀 |
| Tennis | `tennis` | 🎾 |
| Cricket | `cricket_*` | 🏏 |
| Boxing | `boxing` | 🥊 |
| Ice Hockey | `icehockey_nhl` | 🏒 |
| American Football | `americanfootball_nfl` | 🏈 |
| Rugby Union | `rugby_union` | 🏉 |
| Rugby League | `rugby_league` | 🏉 |
| Dota 2 | `esports_dota2` | ⚔️ |
| League of Legends | `esports_lol` | 🎮 |
| Counter-Strike 2 | `esports_cs2` | 🔫 |
| Volleyball | `volleyball` | 🏐 |
| Baseball | `baseball_mlb` | ⚾ |
| MMA | `mma_mixed_martial_arts` | 🥋 |

## 🔄 Real-Time Updates

### Option 1: Polling (Simple)
```typescript
useEffect(() => {
  const interval = setInterval(() => {
    fetchMatches();
  }, 60000); // Refresh every minute
  
  return () => clearInterval(interval);
}, []);
```

### Option 2: WebSockets (Advanced)
Check if your API provider supports WebSocket connections for real-time updates.

## 🛡️ Error Handling

```typescript
try {
  const data = await getSportsOdds(sport);
  setMatches(data);
} catch (error) {
  if (error.response?.status === 429) {
    // Rate limit exceeded
    console.error('API rate limit exceeded');
  } else if (error.response?.status === 401) {
    // Invalid API key
    console.error('Invalid API key');
  } else {
    console.error('Unknown error:', error);
  }
  // Fallback to mock data
  setMatches(mockMatches);
}
```

## 📝 Example Response Structure

```json
[
  {
    "id": "abc123",
    "sport_key": "soccer",
    "home_team": "Manchester United",
    "away_team": "Liverpool",
    "commence_time": "2025-11-01T20:00:00Z",
    "bookmakers": [
      {
        "key": "betfair",
        "title": "Betfair",
        "markets": [
          {
            "key": "h2h",
            "outcomes": [
              { "name": "Manchester United", "price": 2.5 },
              { "name": "Liverpool", "price": 2.8 },
              { "name": "Draw", "price": 3.2 }
            ]
          }
        ]
      }
    ]
  }
]
```

## 🎨 Data Transformation

Transform API data to match your component structure:

```typescript
function transformMatchData(apiData: Match[]) {
  return apiData.map(match => ({
    id: match.id,
    league: match.sport_key,
    team1: match.home_team,
    team2: match.away_team,
    time: new Date(match.commence_time).toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    }),
    date: new Date(match.commence_time).toLocaleDateString('en-US', { 
      day: '2-digit', 
      month: 'short' 
    }),
    odds1: match.bookmakers[0]?.markets[0]?.outcomes[0]?.price || 0,
    oddsX: match.bookmakers[0]?.markets[0]?.outcomes[2]?.price || 0,
    odds2: match.bookmakers[0]?.markets[0]?.outcomes[1]?.price || 0,
  }));
}
```

## 🔑 Getting Started

1. **Sign up** for TheOddsAPI: https://the-odds-api.com/
2. **Get your API key** from the dashboard
3. **Add to `.env.local`**: `NEXT_PUBLIC_SPORTS_API_KEY=your_key`
4. **Create** `lib/api/sports.ts` with the code above
5. **Update** `app/betting/page.tsx` to use real data
6. **Test** with the free tier (500 requests/month)

## 📚 Additional Resources

- TheOddsAPI Docs: https://the-odds-api.com/liveapi/guides/v4/
- RapidAPI Sports: https://rapidapi.com/collection/sports-apis
- Sportradar Docs: https://sportradar.com/developers/api-documentation

## 🚨 Important Notes

- **Rate Limits**: Be mindful of API rate limits
- **Caching**: Consider caching data to reduce API calls
- **Mock Data**: Keep mock data as fallback
- **Error States**: Always handle API failures gracefully
- **Testing**: Test with free tier before upgrading

## 💡 Pro Tips

1. **Combine Multiple APIs**: Use different APIs for different sports
2. **Cache Aggressively**: Store recent data in localStorage
3. **Optimistic Updates**: Show data immediately, refresh in background
4. **WebSocket**: Prefer WebSocket over polling when available
5. **Error Boundary**: Wrap components in error boundaries

---

**Current Status**: The betting page is set up with mock data. Follow the steps above to integrate real-time sports data.


