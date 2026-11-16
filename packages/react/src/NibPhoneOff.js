import { createElement as h, forwardRef } from 'react';

export const NibPhoneOff = forwardRef(function NibPhoneOff({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10.7 13.3a11 11 0 0 0 3.8 3.2L16 14l5 2v3a2 2 0 0 1-2 2 16 16 0 0 1-11.3-5.2M5.4 12.6A16 16 0 0 1 3 5a2 2 0 0 1 2-2h3l2 5-2.5 1.5M3 21L21 3", fill: "none" })
  );
});

export default NibPhoneOff;
