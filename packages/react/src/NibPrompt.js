import { createElement as h, forwardRef } from 'react';

export const NibPrompt = forwardRef(function NibPrompt({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "4", width: "20", height: "16", rx: "2", fill: "none" }),
    h('path', { d: "M6 10l3 2-3 2M11 15h5M18 6.5l.4 1 1 .4-1 .4-.4 1-.4-1-1-.4 1-.4z", fill: "none" })
  );
});

export default NibPrompt;
