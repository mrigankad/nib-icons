import { createElement as h, forwardRef } from 'react';

export const NibAbacus = forwardRef(function NibAbacus({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "1", fill: "none" }),
    h('path', { d: "M3 8h18M3 13h18M3 18h18", fill: "none" }),
    h('circle', { cx: "7", cy: "8", r: "1.2", fill: "none" }),
    h('circle', { cx: "10", cy: "8", r: "1.2", fill: "none" }),
    h('circle', { cx: "16", cy: "13", r: "1.2", fill: "none" }),
    h('circle', { cx: "8", cy: "13", r: "1.2", fill: "none" }),
    h('circle', { cx: "13", cy: "18", r: "1.2", fill: "none" }),
    h('circle', { cx: "16", cy: "18", r: "1.2", fill: "none" })
  );
});

export default NibAbacus;
