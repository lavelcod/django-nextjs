import localFont from 'next/font/local';

    export const myFont = localFont({
      src: [
        { path: '../../public/fonts/Iransans.ttf', weight: '700', style: 'normal' },
        
      ],
      variable: '--font-my-font', // Define a CSS variable for Tailwind
      display: 'swap',
    });