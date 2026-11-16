import { createElement as h, forwardRef } from 'react';

export const NibAllergy = forwardRef(function NibAllergy({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "2", fill: "none" }),
    h('circle', { cx: "12", cy: "5.500", r: "2.500", fill: "none" }),
    h('circle', { cx: "18.200", cy: "10", r: "2.500", fill: "none" }),
    h('circle', { cx: "15.800", cy: "17.300", r: "2.500", fill: "none" }),
    h('circle', { cx: "8.200", cy: "17.300", r: "2.500", fill: "none" }),
    h('circle', { cx: "5.800", cy: "10", r: "2.500", fill: "none" })
  );
});

export default NibAllergy;
