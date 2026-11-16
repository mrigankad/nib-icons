import { createElement as h, forwardRef } from 'react';

export const NibCoral = forwardRef(function NibCoral({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 22v-8M12 14l-4-4V6M8 8L5 6V3M12 14l4-3V5M16 8l3-2V3M12 10V7M4 22h16", fill: "none" })
  );
});

export default NibCoral;
