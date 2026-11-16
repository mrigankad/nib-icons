import { createElement as h, forwardRef } from 'react';

export const NibEarring = forwardRef(function NibEarring({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "4", r: "2", fill: "none" }),
    h('path', { d: "M12 6v3M12 9l-4 6 4 7 4-7z", fill: "none" })
  );
});

export default NibEarring;
