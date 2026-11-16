import { createElement as h, forwardRef } from 'react';

export const NibPumpkin = forwardRef(function NibPumpkin({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 6c-5-1-9 2-9 7s4 8 9 8 9-3 9-8-4-8-9-7zM12 6c-2 2-3 5-3 8s1 6 3 7M12 6c2 2 3 5 3 8s-1 6-3 7M12 6V3l2-1", fill: "none" })
  );
});

export default NibPumpkin;
