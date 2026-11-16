import { createElement as h, forwardRef } from 'react';

export const NibBarometer = forwardRef(function NibBarometer({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "9", fill: "none" }),
    h('path', { d: "M12 12l4-4M7 15a5.5 5.5 0 0 1 0-6M17 9a5.5 5.5 0 0 1 0 6", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "1", fill: "none" })
  );
});

export default NibBarometer;
