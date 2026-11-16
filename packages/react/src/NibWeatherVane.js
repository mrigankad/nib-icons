import { createElement as h, forwardRef } from 'react';

export const NibWeatherVane = forwardRef(function NibWeatherVane({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 4v18M8 22h8M4 8h16l-3-3M4 8l2 2M17 8v3h3l-3-3M9 13h6", fill: "none" })
  );
});

export default NibWeatherVane;
