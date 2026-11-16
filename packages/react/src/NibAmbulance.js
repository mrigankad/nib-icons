import { createElement as h, forwardRef } from 'react';

export const NibAmbulance = forwardRef(function NibAmbulance({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 17H2V6h13v11M15 9h4l3 4v4h-2M9 17h6M8 9v4M6 11h4", fill: "none" }),
    h('circle', { cx: "7", cy: "17", r: "2", fill: "none" }),
    h('circle', { cx: "17", cy: "17", r: "2", fill: "none" })
  );
});

export default NibAmbulance;
