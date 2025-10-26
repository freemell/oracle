'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import axios from 'axios';
import { 
  Star, 
  Circle,
  Flame, 
  Pill, 
  Wand2, 
  Gamepad2, 
  Swords,
  Zap,
  Sparkles,
  Target,
  Trophy,
  Activity
} from 'lucide-react';

// Sports data structure
interface Sport {
  id: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  count: number;
}

const sports: Sport[] = [
  { id: 'top', name: 'Top Events', icon: Star, count: 69 },
  { id: 'football', name: 'Football', icon: Circle, count: 0 },
  { id: 'basketball', name: 'Basketball', icon: Circle, count: 0 },
  { id: 'tennis', name: 'Tennis', icon: Circle, count: 0 },
  { id: 'cricket', name: 'Cricket', icon: Wand2, count: 0 },
  { id: 'boxing', name: 'Boxing', icon: Pill, count: 0 },
  { id: 'ice-hockey', name: 'Ice Hockey', icon: Flame, count: 0 },
  { id: 'american-football', name: 'American Football', icon: Gamepad2, count: 0 },
  { id: 'rugby-union', name: 'Rugby Union', icon: Circle, count: 0 },
  { id: 'rugby-league', name: 'Rugby League', icon: Circle, count: 0 },
  { id: 'dota2', name: 'Dota 2', icon: Swords, count: 0 },
  { id: 'lol', name: 'League of Legends', icon: Sparkles, count: 0 },
  { id: 'cs2', name: 'Counter-Strike 2', icon: Zap, count: 0 },
  { id: 'volleyball', name: 'Volleyball', icon: Target, count: 0 },
  { id: 'baseball', name: 'Baseball', icon: Trophy, count: 0 },
  { id: 'mma', name: 'MMA', icon: Activity, count: 0 },
];

// Mock matches data - replace with real API data
const mockMatches = [
  {
    id: 1,
    league: 'Spain • LaLiga',
    team1: 'Atletico Madrid',
    team2: 'Sevilla FC',
    time: '16:15',
    date: '01 Nov',
    odds1: 1.4,
    oddsX: 4.2,
    odds2: 2.85,
  },
  {
    id: 2,
    league: 'Spain • LaLiga',
    team1: 'Real Sociedad',
    team2: 'Valencia CF',
    time: '18:30',
    date: '01 Nov',
    odds1: 2.85,
    oddsX: 3.2,
    odds2: 2.4,
  },
  {
    id: 3,
    league: 'Spain • LaLiga',
    team1: 'Real Madrid',
    team2: 'Girona FC',
    time: '20:00',
    date: '01 Nov',
    odds1: 1.25,
    oddsX: 5.5,
    odds2: 10.0,
  },
  {
    id: 4,
    league: 'Spain • LaLiga',
    team1: 'Getafe CF',
    team2: 'Athletic Bilbao',
    time: '14:00',
    date: '02 Nov',
    odds1: 2.32,
    oddsX: 3.1,
    odds2: 3.05,
  },
  {
    id: 5,
    league: 'Spain • LaLiga',
    team1: 'Villarreal CF',
    team2: 'Real Betis',
    time: '16:30',
    date: '02 Nov',
    odds1: 1.72,
    oddsX: 3.5,
    odds2: 4.8,
  },
];

export default function BettingPage() {
  const { connected, publicKey } = useWallet();
  const [selectedSport, setSelectedSport] = useState('top');
  const [selectedMatchType, setSelectedMatchType] = useState('pre-match');
  const [timeFilter, setTimeFilter] = useState('today');
  const [betSlip, setBetSlip] = useState<any[]>([]);
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/sports?sport=${selectedSport}`);
        setMatches(response.data);
      } catch (error) {
        console.error('Error fetching matches:', error);
        setMatches(mockMatches); // Fallback to mock data
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, [selectedSport]);

  const addToBetSlip = (match: any, outcome: string, odds: number) => {
    const bet = {
      id: `${match.id}-${outcome}`,
      match: `${match.team1} vs ${match.team2}`,
      outcome,
      odds,
    };
    setBetSlip([...betSlip, bet]);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/20 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Oracle" className="h-6 w-auto opacity-80" />
            <span className="font-mono text-2xl font-bold tracking-widest italic transform -skew-x-12 text-white">
              ORACLE
            </span>
          </Link>
          <div className="connect-wallet-btn">
            <WalletMultiButton />
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-57px)]">
        {/* Left Sidebar */}
        <aside className="w-64 border-r border-white/20 bg-black/40 backdrop-blur-sm overflow-y-auto">
          <div className="p-4">
            <div className="mb-6">
              <div className="text-xs text-white/60 font-mono mb-2">Powered by Azuro</div>
            </div>

            {/* Match Type Toggle */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setSelectedMatchType('pre-match')}
                className={`flex-1 py-2 text-xs font-mono transition-all ${
                  selectedMatchType === 'pre-match'
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-white/60 hover:bg-white/20'
                }`}
              >
                Pre-Match
              </button>
              <button
                onClick={() => setSelectedMatchType('in-play')}
                className={`flex-1 py-2 text-xs font-mono transition-all ${
                  selectedMatchType === 'in-play'
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-white/60 hover:bg-white/20'
                }`}
              >
                In-Play
              </button>
            </div>

            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 text-white text-xs font-mono placeholder-white/40 focus:outline-none focus:border-purple-600"
                />
              </div>
            </div>

            {/* Sports List */}
            <div className="space-y-1">
              {sports.map((sport) => {
                const Icon = sport.icon;
                return (
                  <button
                    key={sport.id}
                    onClick={() => setSelectedSport(sport.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm font-mono transition-all ${
                      selectedSport === sport.id
                        ? 'bg-white text-black'
                        : 'text-white/70 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      <span>{sport.name}</span>
                    </div>
                    {sport.count > 0 && (
                      <span className="text-xs bg-white text-black px-2 py-0.5 rounded">{sport.count}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-6 py-6">
            {/* Featured Matches */}
            <div className="mb-8">
              <h2 className="text-xl font-mono mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Featured Predictions
              </h2>
              {loading ? (
                <div className="text-center py-12 text-white/60 font-mono">Loading prophecies...</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {matches.slice(0, 3).map((match) => (
                    <div key={match.id} className="bg-white/5 border border-white/20 p-4 hover:border-white transition-all">
                      <div className="text-xs text-white/60 font-mono mb-2">{match.league}</div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex-1">
                          <div className="font-mono text-sm">{match.team1}</div>
                          <div className="font-mono text-xs text-white/60">vs</div>
                          <div className="font-mono text-sm">{match.team2}</div>
                        </div>
                      </div>
                      <div className="text-xs text-white/60 font-mono mb-3">{match.time} {match.date}</div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => addToBetSlip(match, '1', match.odds1)}
                          className="flex-1 py-2 bg-white text-black hover:bg-white/90 text-xs font-mono transition-all"
                        >
                          1 - {match.odds1}
                        </button>
                        <button
                          onClick={() => addToBetSlip(match, 'X', match.oddsX)}
                          className="flex-1 py-2 bg-white text-black hover:bg-white/90 text-xs font-mono transition-all"
                        >
                          X - {match.oddsX}
                        </button>
                        <button
                          onClick={() => addToBetSlip(match, '2', match.odds2)}
                          className="flex-1 py-2 bg-white text-black hover:bg-white/90 text-xs font-mono transition-all"
                        >
                          2 - {match.odds2}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* All Matches */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-mono flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Prophetic Predictions
                </h2>
                <div className="flex gap-2">
                  {['All', 'Today', 'Tomorrow', '1h', '3h', '6h'].map((filter) => (
                    <button
                      key={filter}
                    onClick={() => setTimeFilter(filter.toLowerCase())}
                    className={`px-3 py-1 text-xs font-mono transition-all ${
                      timeFilter === filter.toLowerCase()
                        ? 'bg-white text-black'
                        : 'bg-white/10 text-white/60 hover:bg-white/20'
                    }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {loading ? (
                <div className="text-center py-12 text-white/60 font-mono">Loading...</div>
              ) : (
                <div className="space-y-2">
                  {matches.map((match) => (
                  <div
                    key={match.id}
                    className="bg-white/5 border border-white/20 p-4 hover:border-white transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="text-xs text-white/60 font-mono mb-1">{match.league}</div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="font-mono text-sm">{match.team1}</div>
                          <div className="text-white/40 font-mono">vs</div>
                          <div className="font-mono text-sm">{match.team2}</div>
                        </div>
                        <div className="text-xs text-white/60 font-mono">{match.time} {match.date}</div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => addToBetSlip(match, '1', match.odds1)}
                          className="px-4 py-2 bg-white text-black hover:bg-white/90 text-sm font-mono transition-all"
                        >
                          {match.odds1}
                        </button>
                        <button
                          onClick={() => addToBetSlip(match, 'X', match.oddsX)}
                          className="px-4 py-2 bg-white text-black hover:bg-white/90 text-sm font-mono transition-all"
                        >
                          {match.oddsX}
                        </button>
                        <button
                          onClick={() => addToBetSlip(match, '2', match.odds2)}
                          className="px-4 py-2 bg-white text-black hover:bg-white/90 text-sm font-mono transition-all"
                        >
                          {match.odds2}
                        </button>
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Right Sidebar - Betslip */}
        <aside className="w-80 border-l border-white/20 bg-black/40 backdrop-blur-sm">
          <div className="p-4">
            <div className="flex gap-2 mb-4">
              <button className="flex-1 py-2 bg-white text-black text-xs font-mono">Betslip</button>
              <button className="flex-1 py-2 bg-white/10 text-white/60 text-xs font-mono hover:bg-white/20">
                My bets
              </button>
            </div>

            {betSlip.length === 0 ? (
              <div className="text-center py-12 text-white/60 font-mono text-sm">
                <div className="mb-2">📋</div>
                <div>Betslip is empty</div>
                <div className="text-xs mt-2 opacity-60">
                  Choose your prophecies above
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {betSlip.map((bet) => (
                  <div key={bet.id} className="bg-white/5 border border-white/20 p-3">
                    <div className="text-xs text-white/60 font-mono mb-1">{bet.match}</div>
                    <div className="flex items-center justify-between">
                      <div className="font-mono text-sm">{bet.outcome}</div>
                      <div className="text-white font-mono">{bet.odds.toFixed(2)}</div>
                    </div>
                  </div>
                ))}
                <button className="w-full py-3 bg-white text-black font-mono text-sm hover:bg-white/90 transition-all">
                  PLACE PROPHECY
                </button>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

