import { createElement as h, forwardRef } from 'react';

export const NibTree = forwardRef(function NibTree({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 22v-7M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 12l-3-2M12 13l3-3", fill: "none" })
  );
});

export default NibTree;
