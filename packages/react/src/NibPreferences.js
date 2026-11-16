import { createElement as h, forwardRef } from 'react';

export const NibPreferences = forwardRef(function NibPreferences({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", fill: "none" }),
    h('path', { d: "M7 8h4M7 12h10M7 16h6", fill: "none" }),
    h('circle', { cx: "15", cy: "8", r: "1.5", fill: "none" }),
    h('circle', { cx: "17", cy: "16", r: "1.5", fill: "none" })
  );
});

export default NibPreferences;
