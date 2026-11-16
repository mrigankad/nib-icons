import { createElement as h, forwardRef } from 'react';

export const NibPage = forwardRef(function NibPage({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "5", y: "3", width: "14", height: "18", rx: "1", fill: "none" }),
    h('path', { d: "M8 7h8M8 10h8M8 13h5M11 18h2", fill: "none" })
  );
});

export default NibPage;
