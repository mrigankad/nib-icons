import { createElement as h, forwardRef } from 'react';

export const NibPinecone = forwardRef(function NibPinecone({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 5c4 0 6 4 6 8s-3 8-6 8-6-4-6-8 2-8 6-8zM12 5V2M7 10l5 3 5-3M6.5 14.5l5.5 3 5.5-3M9 7l3 2 3-2", fill: "none" })
  );
});

export default NibPinecone;
