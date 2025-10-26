import { NextResponse } from 'next/server';

// Mock sports data for all sports
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sport = searchParams.get('sport') || 'all';

  // Comprehensive mock data for different sports
  const sportsData: Record<string, any[]> = {
    'top': [
      {
        id: 1,
        league: 'Premier League',
        team1: 'Manchester United',
        team2: 'Liverpool',
        time: '20:00',
        date: 'Today',
        odds1: 1.85,
        oddsX: 3.4,
        odds2: 2.1,
      },
      {
        id: 2,
        league: 'NBA',
        team1: 'Lakers',
        team2: 'Warriors',
        time: '21:30',
        date: 'Today',
        odds1: 1.65,
        oddsX: 3.8,
        odds2: 2.25,
      },
    ],
    'football': [
      {
        id: 3,
        league: 'La Liga',
        team1: 'Real Madrid',
        team2: 'Barcelona',
        time: '19:00',
        date: 'Today',
        odds1: 1.75,
        oddsX: 3.6,
        odds2: 2.0,
      },
      {
        id: 4,
        league: 'Serie A',
        team1: 'AC Milan',
        team2: 'Inter Milan',
        time: '18:00',
        date: 'Today',
        odds1: 2.1,
        oddsX: 3.2,
        odds2: 1.9,
      },
    ],
    'basketball': [
      {
        id: 5,
        league: 'NBA Playoffs',
        team1: 'Celtics',
        team2: 'Heat',
        time: '22:00',
        date: 'Today',
        odds1: 1.55,
        oddsX: 4.0,
        odds2: 2.45,
      },
    ],
    'tennis': [
      {
        id: 6,
        league: 'ATP Masters',
        team1: 'Djokovic',
        team2: 'Nadal',
        time: '16:00',
        date: 'Today',
        odds1: 1.9,
        oddsX: 3.5,
        odds2: 2.05,
      },
    ],
    'cricket': [
      {
        id: 7,
        league: 'IPL',
        team1: 'Mumbai Indians',
        team2: 'Chennai Super Kings',
        time: '19:30',
        date: 'Today',
        odds1: 1.8,
        oddsX: 3.3,
        odds2: 2.15,
      },
    ],
    'boxing': [
      {
        id: 8,
        league: 'Heavyweight Championship',
        team1: 'Fury',
        team2: 'Usyk',
        time: '23:00',
        date: 'Tonight',
        odds1: 1.95,
        oddsX: 3.2,
        odds2: 2.0,
      },
    ],
    'ice-hockey': [
      {
        id: 9,
        league: 'NHL',
        team1: 'Toronto Maple Leafs',
        team2: 'Boston Bruins',
        time: '20:00',
        date: 'Today',
        odds1: 1.75,
        oddsX: 3.6,
        odds2: 2.05,
      },
    ],
    'american-football': [
      {
        id: 10,
        league: 'NFL',
        team1: 'Kansas City Chiefs',
        team2: 'Buffalo Bills',
        time: '01:00',
        date: 'Tomorrow',
        odds1: 1.85,
        oddsX: 3.4,
        odds2: 2.1,
      },
    ],
    'rugby-union': [
      {
        id: 11,
        league: 'Premiership',
        team1: 'Leicester Tigers',
        team2: 'Saracens',
        time: '15:00',
        date: 'Today',
        odds1: 2.0,
        oddsX: 3.3,
        odds2: 1.95,
      },
    ],
    'rugby-league': [
      {
        id: 12,
        league: 'NRL',
        team1: 'Sydney Roosters',
        team2: 'Melbourne Storm',
        time: '11:00',
        date: 'Tomorrow',
        odds1: 1.9,
        oddsX: 3.5,
        odds2: 2.05,
      },
    ],
    'dota2': [
      {
        id: 13,
        league: 'Dota 2 Championship',
        team1: 'Team Liquid',
        team2: 'OG',
        time: '14:00',
        date: 'Today',
        odds1: 1.85,
        oddsX: 3.4,
        odds2: 2.1,
      },
    ],
    'lol': [
      {
        id: 14,
        league: 'Worlds 2024',
        team1: 'T1',
        team2: 'Gen.G',
        time: '13:00',
        date: 'Today',
        odds1: 1.75,
        oddsX: 3.6,
        odds2: 2.0,
      },
    ],
    'cs2': [
      {
        id: 15,
        league: 'ESL Pro League',
        team1: 'FaZe Clan',
        team2: 'Natus Vincere',
        time: '17:00',
        date: 'Today',
        odds1: 1.9,
        oddsX: 3.5,
        odds2: 2.05,
      },
    ],
    'volleyball': [
      {
        id: 16,
        league: 'Volleyball Nations League',
        team1: 'Brazil',
        team2: 'Italy',
        time: '19:00',
        date: 'Today',
        odds1: 1.85,
        oddsX: 3.4,
        odds2: 2.1,
      },
    ],
    'baseball': [
      {
        id: 17,
        league: 'MLB',
        team1: 'Yankees',
        team2: 'Red Sox',
        time: '20:30',
        date: 'Today',
        odds1: 1.8,
        oddsX: 3.3,
        odds2: 2.15,
      },
    ],
    'mma': [
      {
        id: 18,
        league: 'UFC',
        team1: 'Jon Jones',
        team2: 'Stipe Miocic',
        time: '22:00',
        date: 'Tonight',
        odds1: 1.95,
        oddsX: 3.2,
        odds2: 2.0,
      },
    ],
  };

  const data = sport === 'all' 
    ? Object.values(sportsData).flat() 
    : sportsData[sport] || [];

  return NextResponse.json(data);
}


