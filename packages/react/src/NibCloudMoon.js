import { createElement as h, forwardRef } from 'react';

export const NibCloudMoon = forwardRef(function NibCloudMoon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 9.5A5 5 0 0 1 6 3a5 5 0 0 0-2.5 7M7 20h10a3.5 3.5 0 0 0 .4-7A5 5 0 0 0 8 12a4 4 0 0 0-1 8z", fill: "none" })
  );
});

export default NibCloudMoon;
