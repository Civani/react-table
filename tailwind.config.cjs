/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Lato'],
      },
      colors: {
        gray3: '#D1D5DB',
        gray4: '#9CA3AF',
        gray5: '#6B7280',
        gray6: '#4B5563',
        gray7: '#374151',
        blue4: '#60A5FA',
        blue5: '#3B82F6',
        blue6: '#2563EB',
        blue9: '#1E3A8A',
        white: '#FFFFFF',
        backgound: '#E4E5E7',
      },
    },
  },
  plugins: [],
};
