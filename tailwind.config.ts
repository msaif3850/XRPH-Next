import type { Config } from "tailwindcss";
// import {fontFamily} from 'tailwindcss/defaultTheme';

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		//fontFamily: {biennale: ['var(--font-biennale)', ...fontFamily.sans],},
		backgroundImage: {
			'waves': "url('/waves.webp')",
			'waves-dark': "url('/waves-dark.png')",
			'waves-ai': "url('/ai/xrph-ai-banner-mobile.jpg')",
			'waves-ai-dark': "url('/ai/xrph-ai-banner-mobile-dark.png')",
			'waves-wallet': "url('/xrph-wallet-app-home-banner.webp')",
			'map': "url('/africa-map.webp')",
			'thumbnail': "url('/yt-thumbnail.webp')",
		},
  		colors: {
			haraa: '#02fd81',
			haraa2: '#00CC66',
			jamni: '#a84af3e6',
			jamni2: '#922ECA',
			footerbg: '#ecfff5',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
	  require("tailwindcss-animate"),
	  require("daisyui")
  ],
} satisfies Config;
