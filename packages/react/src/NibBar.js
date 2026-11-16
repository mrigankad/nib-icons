import { createElement as h, forwardRef } from 'react';

export const NibBar = forwardRef(function NibBar({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 4h16l-8 9z", fill: "none" }),
    h('path', { d: "M12 13v7M8 20h8", fill: "none" }),
    h('path', { d: "M15 2.500 11 8", fill: "none" })
  );
});

export default NibBar;
