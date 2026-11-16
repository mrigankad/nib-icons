import { createElement as h, forwardRef } from 'react';

export const NibPhoneCall = forwardRef(function NibPhoneCall({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 3h3l2 5-2.5 1.5a11 11 0 0 0 7 7L16 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2zM14.5 3a6.5 6.5 0 0 1 6.5 6.5M14.5 6.5a3 3 0 0 1 3 3", fill: "none" })
  );
});

export default NibPhoneCall;
