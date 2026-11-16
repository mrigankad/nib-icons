import { createElement as h, forwardRef } from 'react';

export const NibAnnouncement = forwardRef(function NibAnnouncement({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 9h3l6-4v12l-6-4H3zM15.5 8.5a4 4 0 0 1 0 5M18.5 6a7.5 7.5 0 0 1 0 10M6 13l1 6h2.5", fill: "none" })
  );
});

export default NibAnnouncement;
