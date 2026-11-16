import { createElement as h, forwardRef } from 'react';

export const NibPineapple = forwardRef(function NibPineapple({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "12", cy: "15", rx: "5", ry: "7", fill: "none" }),
    h('path', { d: "M12 8L9 2M12 8l3-6M12 8V2M12 8L7 5M12 8l5-3M8 12l8 6M16 12l-8 6", fill: "none" })
  );
});

export default NibPineapple;
