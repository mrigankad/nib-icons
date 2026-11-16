import { createElement as h, forwardRef } from 'react';

export const NibCloudHeavyRain = forwardRef(function NibCloudHeavyRain({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 14h10a4 4 0 0 0 .5-8A5.5 5.5 0 0 0 7 5a4.5 4.5 0 0 0 0 9zM7 17l-1.5 5M10.5 17L9 22M14 17l-1.5 5M17.5 17L16 22", fill: "none" })
  );
});

export default NibCloudHeavyRain;
