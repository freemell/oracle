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
    if (!API_KEY) {
      console.warn('No API key configured, returning empty data');
      return [];
    }
    
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
    return [];
  }
}

export async function getAvailableSports() {
  try {
    if (!API_KEY) {
      console.warn('No API key configured');
      return [];
    }
    
    const response = await axios.get(`${BASE_URL}/sports`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching sports list:', error);
    return [];
  }
}

// Transform API data to match component structure
export function transformMatchData(apiData: Match[]) {
  return apiData.map(match => {
    const commenceTime = new Date(match.commence_time);
    const bookmaker = match.bookmakers[0];
    const market = bookmaker?.markets[0];
    const outcomes = market?.outcomes || [];
    
    return {
      id: match.id,
      league: match.sport_key,
      team1: match.home_team,
      team2: match.away_team,
      time: commenceTime.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false
      }),
      date: commenceTime.toLocaleDateString('en-US', { 
        day: '2-digit', 
        month: 'short' 
      }),
      odds1: outcomes[0]?.price || 0,
      oddsX: outcomes[2]?.price || 0,
      odds2: outcomes[1]?.price || 0,
    };
  });
}


