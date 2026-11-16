import { createElement as h, forwardRef } from 'react';

export const NibSmartPlug = forwardRef(function NibSmartPlug({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "6", width: "16", height: "16", rx: "5", fill: "none" }),
    h('path', { d: "M10 11.5v2M14 11.5v2M12 17v1M9.5 3a4 4 0 0 1 5 0", fill: "none" })
  );
});

export default NibSmartPlug;
