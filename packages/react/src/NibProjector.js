import { createElement as h, forwardRef } from 'react';

export const NibProjector = forwardRef(function NibProjector({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "8", width: "20", height: "9", rx: "2", fill: "none" }),
    h('circle', { cx: "16", cy: "12.5", r: "2.5", fill: "none" }),
    h('path', { d: "M6 11h4M6 14h3M5 17v2M19 17v2", fill: "none" })
  );
});

export default NibProjector;
