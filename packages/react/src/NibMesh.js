import { createElement as h, forwardRef } from 'react';

export const NibMesh = forwardRef(function NibMesh({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "5", cy: "5", r: "1.8", fill: "none" }),
    h('circle', { cx: "19", cy: "5", r: "1.8", fill: "none" }),
    h('circle', { cx: "5", cy: "19", r: "1.8", fill: "none" }),
    h('circle', { cx: "19", cy: "19", r: "1.8", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "1.8", fill: "none" }),
    h('path', { d: "M6.4 6.4l4.2 4.2M17.6 6.4l-4.2 4.2M6.4 17.6l4.2-4.2M17.6 17.6l-4.2-4.2M7 5h10M7 19h10M5 7v10M19 7v10", fill: "none" })
  );
});

export default NibMesh;
