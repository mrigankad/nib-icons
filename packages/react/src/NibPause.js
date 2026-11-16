import { createElement as h, forwardRef } from 'react';

export const NibPause = forwardRef(function NibPause({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "6", y: "4", width: "4", height: "16", rx: "1", fill: "none" }),
    h('rect', { x: "14", y: "4", width: "4", height: "16", rx: "1", fill: "none" })
  );
});

export default NibPause;
