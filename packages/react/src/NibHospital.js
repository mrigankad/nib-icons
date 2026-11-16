import { createElement as h, forwardRef } from 'react';

export const NibHospital = forwardRef(function NibHospital({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21V9h4V3h10v6h4v12M2 21h20M12 6v5M9.5 8.5h5M10 21v-4h4v4M5.5 13h1M5.5 17h1M17.5 13h1M17.5 17h1", fill: "none" })
  );
});

export default NibHospital;
