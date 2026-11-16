import { createElement as h, forwardRef } from 'react';

export const NibFeatherBird = forwardRef(function NibFeatherBird({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2c4 3 5 8 3 13l-3 3-3-3c-2-5-1-10 3-13zM12 4v18M12 9l2-1.5M12 12l2.5-2M12 9l-2-1.5M12 12l-2.5-2M12 15l2.5-2M12 15l-2.5-2", fill: "none" })
  );
});

export default NibFeatherBird;
