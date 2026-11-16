import { createElement as h, forwardRef } from 'react';

export const NibSteeringWheel = forwardRef(function NibSteeringWheel({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "9", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "2", fill: "none" }),
    h('path', { d: "M3.5 10c3 1 5.5 1.5 6.5 2M20.5 10c-3 1-5.5 1.5-6.5 2M12 14v7", fill: "none" })
  );
});

export default NibSteeringWheel;
