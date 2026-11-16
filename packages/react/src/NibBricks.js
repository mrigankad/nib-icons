import { createElement as h, forwardRef } from 'react';

export const NibBricks = forwardRef(function NibBricks({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "4", width: "20", height: "16", rx: "1", fill: "none" }),
    h('path', { d: "M2 9.3h20M2 14.7h20M8 4v5.3M16 4v5.3M12 9.3v5.4M5 9.3v5.4M19 9.3v5.4M8 14.7V20M16 14.7V20", fill: "none" })
  );
});

export default NibBricks;
