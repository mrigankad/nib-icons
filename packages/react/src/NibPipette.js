import { createElement as h, forwardRef } from 'react';

export const NibPipette = forwardRef(function NibPipette({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M19 5l-3-3-2.5 2.5 3 3zM12 6l6 6M15 9l-9 9H4v-2l9-9M3 21.5h.01", fill: "none" })
  );
});

export default NibPipette;
