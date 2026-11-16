import { createElement as h, forwardRef } from 'react';

export const NibCool = forwardRef(function NibCool({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "10", fill: "none" }),
    h('path', { d: "M5 9h14M6.5 9v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V9M12.5 9v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V9M9 15.5a4 4 0 0 0 6 0", fill: "none" })
  );
});

export default NibCool;
