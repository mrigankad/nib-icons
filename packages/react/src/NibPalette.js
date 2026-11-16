import { createElement as h, forwardRef } from 'react';

export const NibPalette = forwardRef(function NibPalette({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 21a9 9 0 1 1 9-9c0 2.5-2 3.5-4 3.5h-2a2 2 0 0 0-1.5 3.3c.6.8.3 2.2-1.5 2.2z", fill: "none" }),
    h('circle', { cx: "7.5", cy: "11.5", r: "1", fill: "none" }),
    h('circle', { cx: "9.5", cy: "7.5", r: "1", fill: "none" }),
    h('circle', { cx: "14.5", cy: "7.5", r: "1", fill: "none" })
  );
});

export default NibPalette;
