const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: {
		// Does not specify src because we have some tailwind classes in mdsvex.config.js
		content: ['./src/**/*.{html,js,svelte,ts,md}', './mdsvex.config.js']
	},
	darkMode: true, // or 'media' or 'class'
	
	variants: {
		extend: {}
	},
	plugins: [
		
	]
};