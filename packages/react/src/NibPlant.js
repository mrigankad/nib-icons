import { createElement as h, forwardRef } from 'react';

export const NibPlant = forwardRef(function NibPlant({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 15h12l-1.5 7h-9zM12 15V8M12 11c-4 0-6-2-6-6 4 0 6 2 6 6zM12 9c0-4 2-6 6-6 0 4-2 6-6 6z", fill: "none" })
  );
});

export default NibPlant;
