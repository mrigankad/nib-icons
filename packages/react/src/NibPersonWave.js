import { createElement as h, forwardRef } from 'react';

export const NibPersonWave = forwardRef(function NibPersonWave({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "10.5", cy: "5", r: "2.2", fill: "none" }),
    h('rect', { x: "7.5", y: "9", width: "6", height: "7", rx: "2", fill: "none" }),
    h('path', { d: "M9 16v5M12 16v5M7.5 11L5 15.5M13.5 10.5l3.5-3.5M19.5 5c1 1 1 2.5 0 3.5", fill: "none" })
  );
});

export default NibPersonWave;
