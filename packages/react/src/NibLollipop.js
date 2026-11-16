import { createElement as h, forwardRef } from 'react';

export const NibLollipop = forwardRef(function NibLollipop({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "9", r: "7", fill: "none" }),
    h('path', { d: "M12 16v6M12 9a2 2 0 1 1 2 2 4 4 0 0 1-4-4 6 6 0 0 1 6-6", fill: "none" })
  );
});

export default NibLollipop;
