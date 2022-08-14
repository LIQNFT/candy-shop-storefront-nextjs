import { useTheme } from 'next-themes';
import { useHasMounted } from '../../hooks/useTools';

const themes = [
  { title: 'Dark', name: 'dark', color: { hex: '#000000' } },
  { title: 'Light', name: 'light', color: { hex: '#f4f4f0' } },
  { title: 'Candy', name: 'candy', color: { hex: '#f4f4f0' } },
];

const ThemeMode = () => {
  const hasMounted = useHasMounted();

  const { theme, setTheme } = useTheme();

  // Client side only otherwise it wont run
  if (!hasMounted || !theme) return null;

  // store our current and next theme objects (will be first theme, if undefined)
  const currentIndex = Math.max(
    0,
    themes.findIndex((t) => t.name === theme)
  );

  const nextTheme = themes[(currentIndex + 1) % themes.length];
  const currentTheme = themes[currentIndex];

  return (
    <div className="theme-switch">
      <button
        className="theme-switch--toggle"
        onClick={() => setTheme(nextTheme.name)}
        aria-label={`Change theme to ${nextTheme.title}`}
      >
        <span className="theme-switch--label">
          Mode: <span className="hover:underline">{currentTheme.title}</span>
        </span>
      </button>
    </div>
  );
};

export default ThemeMode;
