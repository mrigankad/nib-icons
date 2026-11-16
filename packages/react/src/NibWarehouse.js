import { createElement as h, forwardRef } from 'react';

export const NibWarehouse = forwardRef(function NibWarehouse({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 21V9l10-6 10 6v12M6 21v-9h12v9M6 15h12M6 18h12", fill: "none" })
  );
});

export default NibWarehouse;
