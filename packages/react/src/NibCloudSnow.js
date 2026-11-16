import { createElement as h, forwardRef } from 'react';

export const NibCloudSnow = forwardRef(function NibCloudSnow({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 15h10a4 4 0 0 0 .5-8A5.5 5.5 0 0 0 7 6a4.5 4.5 0 0 0 0 9zM8 18v.01M12 18v.01M16 18v.01M10 21v.01M14 21v.01", fill: "none" })
  );
});

export default NibCloudSnow;
