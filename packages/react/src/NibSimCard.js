import { createElement as h, forwardRef } from 'react';

export const NibSimCard = forwardRef(function NibSimCard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 2h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM12 11v7M8 14.5h8", fill: "none" }),
    h('rect', { x: "8", y: "11", width: "8", height: "7", rx: "1", fill: "none" })
  );
});

export default NibSimCard;
