import { createElement as h, forwardRef } from 'react';

export const NibPlantIndustrial = forwardRef(function NibPlantIndustrial({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 21h20M4 21V8h4v13M10 21V12h10v9M5 8l1-5 1 5M13 15h4M13 18h4", fill: "none" })
  );
});

export default NibPlantIndustrial;
