import { createElement as h, forwardRef } from 'react';

export const NibAvocado = forwardRef(function NibAvocado({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2c3 0 5 4 6 8s2 6 1 9c-1 2-4 3-7 3s-6-1-7-3c-1-3 0-5 1-9s3-8 6-8z", fill: "none" }),
    h('circle', { cx: "12", cy: "15", r: "3", fill: "none" })
  );
});

export default NibAvocado;
