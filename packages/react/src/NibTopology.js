import { createElement as h, forwardRef } from 'react';

export const NibTopology = forwardRef(function NibTopology({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "5", r: "2", fill: "none" }),
    h('circle', { cx: "5", cy: "12", r: "2", fill: "none" }),
    h('circle', { cx: "19", cy: "12", r: "2", fill: "none" }),
    h('circle', { cx: "12", cy: "19", r: "2", fill: "none" }),
    h('path', { d: "M10.6 6.4l-4.2 4.2M13.4 6.4l4.2 4.2M6.4 13.4l4.2 4.2M17.6 13.4l-4.2 4.2", fill: "none" })
  );
});

export default NibTopology;
