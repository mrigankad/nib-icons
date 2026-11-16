import { createElement as h, forwardRef } from 'react';

export const NibWalkieTalkie = forwardRef(function NibWalkieTalkie({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "7", y: "7", width: "10", height: "15", rx: "2", fill: "none" }),
    h('path', { d: "M10 7V2M10 11h4M10 14h4M11.5 18h1", fill: "none" })
  );
});

export default NibWalkieTalkie;
