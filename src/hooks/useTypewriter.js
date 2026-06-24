import { useEffect, useState } from 'react';

/**
 * useTypewriter
 * Cycles through an array of words, typing and deleting each one for a
 * looping "typing effect". Pauses entirely when the user prefers reduced motion.
 *
 * @param {string[]} words  - strings to cycle through
 * @param {object}   opts   - timing options (ms)
 */
export function useTypewriter(words, { typeSpeed = 90, deleteSpeed = 45, pause = 1400 } = {}) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // If the user prefers reduced motion, just show the first word statically.
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (reduce) {
      setText(words[0]);
      return;
    }

    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      // Finished typing a word -> pause, then start deleting
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      // Finished deleting -> move to next word
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      // Type or delete one character
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
          );
        },
        deleting ? deleteSpeed : typeSpeed,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause, reduce]);

  return text;
}
