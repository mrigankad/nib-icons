import { createElement as h, forwardRef } from 'react';

export const NibPowerOff = forwardRef(function NibPowerOff({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3v5M7 6a7.5 7.5 0 0 0 10.3 10.9M19 14a7.5 7.5 0 0 0-2-8M3 3l18 18", fill: "none" })
  );
});

export default NibPowerOff;
