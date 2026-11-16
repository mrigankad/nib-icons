import { createElement as h, forwardRef } from 'react';

export const NibLion = forwardRef(function NibLion({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2l2 2 3-1 1 3 3 1-1 3 2 2-2 2 1 3-3 1-1 3-3-1-2 2-2-2-3 1-1-3-3-1 1-3-2-2 2-2-1-3 3-1 1-3 3 1z", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "5", fill: "none" }),
    h('path', { d: "M10.5 11h.01M13.5 11h.01M11 14h2l-1 1z", fill: "none" })
  );
});

export default NibLion;
