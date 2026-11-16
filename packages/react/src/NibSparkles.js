import { createElement as h, forwardRef } from 'react';

export const NibSparkles = forwardRef(function NibSparkles({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 4l1.5 4.5L15 10l-4.5 1.5L9 16l-1.5-4.5L3 10l4.5-1.5zM18 2l.7 1.8 1.8.7-1.8.7L18 7l-.7-1.8L15.5 4.5l1.8-.7zM18 15l.7 1.8 1.8.7-1.8.7L18 20l-.7-1.8-1.8-.7 1.8-.7z", fill: "none" })
  );
});

export default NibSparkles;
