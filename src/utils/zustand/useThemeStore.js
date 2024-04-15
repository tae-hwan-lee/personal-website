import { create } from 'zustand';

const useThemeStore = create((set) => ({
  theme: localStorage.getItem('theme') || 'blue', // Default theme or saved theme
  setTheme: (newTheme) =>
    set(() => {
      localStorage.setItem('theme', newTheme);
      return { theme: newTheme };
    }),
}));

export default useThemeStore;
