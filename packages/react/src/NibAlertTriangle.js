import { createElement as h, forwardRef } from 'react';

export const NibAlertTriangle = forwardRef(function NibAlertTriangle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10.3 4a2 2 0 0 1 3.4 0l7.8 13.5a2 2 0 0 1-1.7 3H4.2a2 2 0 0 1-1.7-3zM12 9v4.5M12 17h.01", fill: "none" })
  );
});

export default NibAlertTriangle;
