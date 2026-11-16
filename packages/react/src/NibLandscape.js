import { createElement as h, forwardRef } from 'react';

export const NibLandscape = forwardRef(function NibLandscape({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "5", width: "20", height: "14", rx: "2", fill: "none" }),
    h('path', { d: "M2 16l5-5 4 4 3-3 8 6", fill: "none" }),
    h('circle', { cx: "16", cy: "9", r: "1.5", fill: "none" })
  );
});

export default NibLandscape;
