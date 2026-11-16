import { createElement as h, forwardRef } from 'react';

export const NibPiano = forwardRef(function NibPiano({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "4", width: "20", height: "16", rx: "2", fill: "none" }),
    h('path', { d: "M7 13v7M12 13v7M17 13v7M5.5 4v9h3V4M10.5 4v9h3V4M15.5 4v9h3V4", fill: "none" })
  );
});

export default NibPiano;
