import { createElement as h, forwardRef } from 'react';

export const NibShell = forwardRef(function NibShell({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 20C6 20 3 15 3 11a9 9 0 0 1 18 0c0 4-3 9-9 9zM12 20V6M12 20L7 8M12 20l5-12M12 20L4 12M12 20l8-8", fill: "none" })
  );
});

export default NibShell;
