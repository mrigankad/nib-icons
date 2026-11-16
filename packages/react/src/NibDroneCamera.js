import { createElement as h, forwardRef } from 'react';

export const NibDroneCamera = forwardRef(function NibDroneCamera({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 5h6M15 5h6M6 5v3.5M18 5v3.5M6 8.5h12M12 13.5v1", fill: "none" }),
    h('rect', { x: "8", y: "8.5", width: "8", height: "5", rx: "1.5", fill: "none" }),
    h('circle', { cx: "12", cy: "17.5", r: "2.5", fill: "none" })
  );
});

export default NibDroneCamera;
