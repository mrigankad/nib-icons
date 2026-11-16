import { createElement as h, forwardRef } from 'react';

export const NibAlert = forwardRef(function NibAlert({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10.6 3.4a2 2 0 0 1 2.8 0l7.2 7.2a2 2 0 0 1 0 2.8l-7.2 7.2a2 2 0 0 1-2.8 0l-7.2-7.2a2 2 0 0 1 0-2.8zM12 8v4.5M12 15.5h.01", fill: "none" })
  );
});

export default NibAlert;
