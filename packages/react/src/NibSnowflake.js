import { createElement as h, forwardRef } from 'react';

export const NibSnowflake = forwardRef(function NibSnowflake({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5M3.5 10.5L6.5 9.3 5.8 6M18.2 18l-.7-3.3 3-1.2M3.5 13.5l3 1.2-.7 3.3M18.2 6l-.7 3.3 3 1.2", fill: "none" })
  );
});

export default NibSnowflake;
