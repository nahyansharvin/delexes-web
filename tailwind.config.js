/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette — kept exact from the original design.
        brand: {
          red: '#C10D13',
          redDark: '#9E0A0F',
          green: '#3B8E64',
          greenDark: '#2F7350',
        },
        ink: '#2C2E30',
        heading: '#1f2123',
        dark: '#23262A',
        footer: '#1c1f22',
        line: '#E7E4DF',
        canvas: '#F8F7F5',
        muted: '#6B6E72',
        faint: '#9b9890',
        panelGreen: '#EAF3EE',
        panelRed: '#FBEDED',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        heading: ['Archivo', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        dxUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        dxUp: 'dxUp 0.6s ease both',
      },
    },
  },
  plugins: [],
}
