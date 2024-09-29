import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation'
import { useAuth } from '@/context/authContext';

const SessionContext = createContext();

export function SessionProvider({ children }) {
    const games = [
        "league_of_legends",
        "valorant",
        "csgo",
        "dota2",
        "overwatch",
        "rocket_league",
        "apex_legends",
        "fortnite",
        "pubg",
        "rainbow_six_siege",
        "smite",
        "world_of_warcraft",
        "hearthstone",
        "star_craft_ii",
        "minecraft",
        "among_us",
        "fall_guys",
        "mario_kart",
        "super_smash_bros",
        "pokemon",
        "animal_crossing"
    ];

    return (
        <SessionContext.Provider value={{games}}>
            {children}
        </SessionContext.Provider>
    );
}

export function useSession() {
    return useContext(SessionContext);
}
