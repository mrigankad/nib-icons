import { createElement as h, forwardRef } from 'react';

export const NibSavings = forwardRef(function NibSavings({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 13h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM9 13v-2M12 13V8M15 13v-3", fill: "none" }),
    h('circle', { cx: "12", cy: "5", r: "2", fill: "none" })
  );
});

export default NibSavings;
