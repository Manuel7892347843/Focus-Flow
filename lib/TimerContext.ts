import React, { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { useStorage } from './useStorage';

export type TimerMode = 'focus' | 'shortBreak' | 'longBreak';

export interface Session {
  id: string;
  mode: TimerMode;
  duration: number;
  completed: boolean;
  completedAt: string;
}

export interface TimerContextType {
  mode: TimerMode;
  setMode: (mode: TimerMode) => void;
  tempoRimanente: number;
  setTempoRimanente: (tempo: number) => void;
  tempoTotale: number;
  setTempoTotale: (tempo: number) => void;
  attivo: boolean;
  setAttivo: (attivo: boolean) => void;
  sessions: Session[];
  addSession: (session: Session) => void;
  stats: { sessioni: number; minutiTotali: number };
  loadData: () => Promise<void>;
  saveData: () => Promise<void>;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { getItem, setItem } = useStorage();
  
  const [mode, setMode] = useState<TimerMode>('focus');
  const [tempoRimanente, setTempoRimanente] = useState(25 * 60);
  const [tempoTotale, setTempoTotale] = useState(25 * 60);
  const [attivo, setAttivo] = useState(false);
  const [sessions, setSessions] = useState<Session[]>([]);

  const getModeDetails = (m: TimerMode) => {
    switch (m) {
      case 'focus':
        return { minutes: 25, color: '#1ECAD3' };
      case 'shortBreak':
        return { minutes: 5, color: '#2ECC71' };
      case 'longBreak':
        return { minutes: 15, color: '#9B59B6' };
    }
  };

  const stats = {
    sessioni: sessions.filter(s => s.completed).length,
    minutiTotali: sessions.reduce((acc, s) => (s.completed ? acc + s.duration : acc), 0),
  };

  const loadData = useCallback(async () => {
    try {
      const savedSessions = await getItem('sessions');
      const savedMode = await getItem('mode');
      if (savedSessions) setSessions(savedSessions);
      if (savedMode) setMode(savedMode);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }, [getItem]);

  const saveData = useCallback(async () => {
    try {
      await setItem('sessions', sessions);
      await setItem('mode', mode);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }, [setItem, sessions, mode]);

  const addSession = useCallback((session: Session) => {
    setSessions(prev => [...prev, session]);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    saveData();
  }, [sessions, mode, saveData]);

  return (
    <TimerContext.Provider
      value={{
        mode,
        setMode,
        tempoRimanente,
        setTempoRimanente,
        tempoTotale,
        setTempoTotale,
        attivo,
        setAttivo,
        sessions,
        addSession,
        stats,
        loadData,
        saveData,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within TimerProvider');
  }
  return context;
};
