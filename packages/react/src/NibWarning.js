import { createElement as h, forwardRef } from 'react';

export const NibWarning = forwardRef(function NibWarning({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3l10 17H2zM12 9.5v4M12 16.5h.01", fill: "none" })
  );
});

export default NibWarning;
