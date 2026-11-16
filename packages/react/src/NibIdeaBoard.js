import { createElement as h, forwardRef } from 'react';

export const NibIdeaBoard = forwardRef(function NibIdeaBoard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "14", rx: "1", fill: "none" }),
    h('path', { d: "M8 21l2-4M16 21l-2-4M12 6.5a2.5 2.5 0 0 0-1.5 4.5v1.5h3V11A2.5 2.5 0 0 0 12 6.5z", fill: "none" })
  );
});

export default NibIdeaBoard;
