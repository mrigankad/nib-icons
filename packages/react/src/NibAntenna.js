import { createElement as h, forwardRef } from 'react';

export const NibAntenna = forwardRef(function NibAntenna({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "8", r: "2", fill: "none" }),
    h('path', { d: "M12 10v12M8 22h8M8.5 4.5a5 5 0 0 0 0 7M15.5 4.5a5 5 0 0 1 0 7M5.5 2a9 9 0 0 0 0 12M18.5 2a9 9 0 0 1 0 12", fill: "none" })
  );
});

export default NibAntenna;
