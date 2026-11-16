import { createElement as h, forwardRef } from 'react';

export const NibPodium = forwardRef(function NibPodium({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 21V9h8v12M2 21v-8h6M16 21v-6h6v6M1 21h22M12 12v6M11.5 12.5l.5-.5", fill: "none" })
  );
});

export default NibPodium;
