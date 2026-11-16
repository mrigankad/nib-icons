import { createElement as h, forwardRef } from 'react';

export const NibFan = forwardRef(function NibFan({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "2", fill: "none" }),
    h('path', { d: "M12 10c0-4 1-7 4-7 2 0 2.5 3 0 5-1.3 1-2.5 1.5-4 2zM14 12c4 0 7 1 7 4 0 2-3 2.5-5 0-1-1.3-1.5-2.5-2-4zM12 14c0 4-1 7-4 7-2 0-2.5-3 0-5 1.3-1 2.5-1.5 4-2zM10 12c-4 0-7-1-7-4 0-2 3-2.5 5 0 1 1.3 1.5 2.5 2 4z", fill: "none" })
  );
});

export default NibFan;
