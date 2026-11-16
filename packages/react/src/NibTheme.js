import { createElement as h, forwardRef } from 'react';

export const NibTheme = forwardRef(function NibTheme({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3a9 9 0 0 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5 1-2 2.5-2H18a3 3 0 0 0 3-3c0-4.5-4-8.5-9-8.5z", fill: "none" }),
    h('circle', { cx: "7.5", cy: "11", r: "1", fill: "none" }),
    h('circle', { cx: "10", cy: "7", r: "1", fill: "none" }),
    h('circle', { cx: "15", cy: "7.5", r: "1", fill: "none" })
  );
});

export default NibTheme;
