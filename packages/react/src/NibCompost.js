import { createElement as h, forwardRef } from 'react';

export const NibCompost = forwardRef(function NibCompost({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 10h16l-1.5 11h-13zM3 10h18M12 10V7M12 7c-2 0-3-1.5-3-3 2 0 3 1.5 3 3zM12 7c2 0 3-1.5 3-3-2 0-3 1.5-3 3zM8 14h.01M12 16h.01M16 14h.01M10 18h.01M14 18h.01", fill: "none" })
  );
});

export default NibCompost;
