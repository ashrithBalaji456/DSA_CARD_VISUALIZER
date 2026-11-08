import confetti from 'canvas-confetti';

export function fireConfetti(): void {
  try {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#6366f1', '#a855f7', '#10b981', '#38bdf8', '#f59e0b'],
    });
  } catch (e) {
    // Ignore fallback if canvas unsupported
  }
}

