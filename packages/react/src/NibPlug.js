import { createElement as h, forwardRef } from 'react';

export const NibPlug = forwardRef(function NibPlug({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0zM12 17v5", fill: "none" })
  );
});

export default NibPlug;
