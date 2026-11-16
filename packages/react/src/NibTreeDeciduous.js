import { createElement as h, forwardRef } from 'react';

export const NibTreeDeciduous = forwardRef(function NibTreeDeciduous({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 17a4 4 0 0 1-1-7.9A5 5 0 0 1 17 9a4 4 0 0 1-1 8zM12 22v-9M12 15l-2-2M12 14l2-2", fill: "none" })
  );
});

export default NibTreeDeciduous;
