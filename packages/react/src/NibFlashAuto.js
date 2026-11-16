import { createElement as h, forwardRef } from 'react';

export const NibFlashAuto = forwardRef(function NibFlashAuto({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M11 2L3 13h6l-1 7 7-10H9zM15 21l2.5-7 2.5 7M15.8 19h3.4", fill: "none" })
  );
});

export default NibFlashAuto;
