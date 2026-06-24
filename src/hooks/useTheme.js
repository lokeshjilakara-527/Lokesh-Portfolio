import { useCallback, useEffect, useState } from 'react';

/**
 * useTheme
 * Manages the dark/light class on <html>. Defaults to dark (the design's
 * primary theme) and remembers the user's choice in localStorage.
 */
export function useTheme() {
  const [theme, setTheme] = useState('dark');

  // Load saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const initial = saved || 'dark';
    setTheme(initial);
  }, []);

  // Apply to <html> whenever it changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}
