import { createElement as h, forwardRef } from 'react';

export const NibIot = forwardRef(function NibIot({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "8", y: "8", width: "8", height: "8", rx: "1", fill: "none" }),
    h('path', { d: "M12 8V4M12 20v-4M8 12H4M20 12h-4", fill: "none" }),
    h('circle', { cx: "12", cy: "3", r: "1", fill: "none" }),
    h('circle', { cx: "12", cy: "21", r: "1", fill: "none" }),
    h('circle', { cx: "3", cy: "12", r: "1", fill: "none" }),
    h('circle', { cx: "21", cy: "12", r: "1", fill: "none" })
  );
});

export default NibIot;
