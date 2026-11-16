import { createElement as h, forwardRef } from 'react';

export const NibCementMixer = forwardRef(function NibCementMixer({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 17h20M14 17V11h4l3 3v3M3 14l2-7h7l1 7zM5 9l6 3", fill: "none" }),
    h('circle', { cx: "6", cy: "19", r: "2", fill: "none" }),
    h('circle', { cx: "17", cy: "19", r: "2", fill: "none" })
  );
});

export default NibCementMixer;
