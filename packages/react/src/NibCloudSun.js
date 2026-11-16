import { createElement as h, forwardRef } from 'react';

export const NibCloudSun = forwardRef(function NibCloudSun({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 2v1.5M3 7h1.5M4.5 3.5l1 1M12.5 9.5A4 4 0 0 0 5 9M7 20h10a3.5 3.5 0 0 0 .4-7A5 5 0 0 0 8 12a4 4 0 0 0-1 8z", fill: "none" })
  );
});

export default NibCloudSun;
