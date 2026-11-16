import { createElement as h, forwardRef } from 'react';

export const NibBulbIdea = forwardRef(function NibBulbIdea({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 6a5 5 0 0 0-3.3 8.8c.5.5.8 1.2.8 2.2h5c0-1 .3-1.7.8-2.2A5 5 0 0 0 12 6zM9.5 19.5h5M10.5 22h3M12 2v1.5M4.5 4.5l1 1M19.5 4.5l-1 1M2.5 11h1.5M20 11h1.5", fill: "none" })
  );
});

export default NibBulbIdea;
