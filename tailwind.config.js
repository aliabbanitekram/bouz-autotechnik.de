/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0B0D10',
          charcoal: '#12151A',
          panel: '#171B22',
          steelLight: '#E8EAED',
          steelFooter: '#52636D',
          steel: '#9AA0A6',
          steelDark: '#5F6368',
          red: '#E4212F',
          redDark: '#B81421',
          whatsapp: '#25D366',
          whatsappDark: '#0F3D2A',
          whatsappHover: '#1FB85A',
          text: '#C9CDD3',
          white: '#F5F6F7',
        },
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'steel-gradient':
          'linear-gradient(135deg, #F5F6F7 0%, #E8EAED 25%, #9AA0A6 55%, #5F6368 100%)',
        'hero-vignette':
          'radial-gradient(circle at 50% 10%, rgba(232, 234, 237, 0.13), rgba(154, 160, 166, 0.22) 24%, rgba(18, 21, 26, 0.7) 48%, #0B0D10 86%)',
        'red-glow':
          'radial-gradient(circle at center, rgba(228, 33, 47, 0.28), transparent 62%)',
      },
      boxShadow: {
        red: '0 18px 50px rgba(228, 33, 47, 0.25)',
        steel: '0 20px 70px rgba(154, 160, 166, 0.14)',
      },
    },
  },
}
