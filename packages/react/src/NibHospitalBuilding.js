import { createElement as h, forwardRef } from 'react';

export const NibHospitalBuilding = forwardRef(function NibHospitalBuilding({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 21V5h16v16M2 21h20M12 8v6M9 11h6M10 21v-3h4v3", fill: "none" })
  );
});

export default NibHospitalBuilding;
