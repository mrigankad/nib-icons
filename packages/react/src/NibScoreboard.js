import { createElement as h, forwardRef } from 'react';

export const NibScoreboard = forwardRef(function NibScoreboard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "4", width: "20", height: "13", rx: "2", fill: "none" }),
    h('path', { d: "M12 4v13M8 21h8M12 17v4M6 9v4M5.5 9H7M16 9h2v2h-2v2h2", fill: "none" })
  );
});

export default NibScoreboard;
