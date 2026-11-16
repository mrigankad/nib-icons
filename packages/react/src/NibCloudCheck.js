import { createElement as h, forwardRef } from 'react';

export const NibCloudCheck = forwardRef(function NibCloudCheck({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 19a5 5 0 0 1-.6-10A6.5 6.5 0 0 1 19 9a4.5 4.5 0 0 1 0 10zM9.5 14l2 2 3.5-3.5", fill: "none" })
  );
});

export default NibCloudCheck;
