import { createElement as h, forwardRef } from 'react';

export const NibSpeedometer = forwardRef(function NibSpeedometer({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4.5 19a9 9 0 1 1 15 0zM12 15l4-5M6 13h1M17 13h1M8 8l.7.7M12 6v1M16 8l-.7.7", fill: "none" }),
    h('circle', { cx: "12", cy: "15", r: "1", fill: "none" })
  );
});

export default NibSpeedometer;
