import { createElement as h, forwardRef } from 'react';

export const NibMenorah = forwardRef(function NibMenorah({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 6v14M8 20h8M4 7v3a8 8 0 0 0 16 0V7M8 7v3a4 4 0 0 0 8 0V7M4 4v1M8 4v1M12 3v1M16 4v1M20 4v1", fill: "none" })
  );
});

export default NibMenorah;
