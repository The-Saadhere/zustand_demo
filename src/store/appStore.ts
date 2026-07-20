import { create } from "zustand";

interface AppState {
  user: null | string;
  login: (user:string) => void;
  logout: () => void;
  theme: string
  toggleTheme: () => void;
}


export const useAppStore = create<AppState>()((set)=>({
    // auth
    user: null,
    login: (user) => set({user}),
    logout: () => set({user: null}),


    // theme
    theme: "light",
    toggleTheme: () => set ((state)=> ({theme: state.theme === "light" ? "dark" : "light"}))
}))