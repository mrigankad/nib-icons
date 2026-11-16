import { createElement as h, forwardRef } from 'react';

export const NibSpeaker = forwardRef(function NibSpeaker({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "5", y: "2", width: "14", height: "20", rx: "3", fill: "none" }),
    h('circle', { cx: "12", cy: "14", r: "4", fill: "none" }),
    h('circle', { cx: "12", cy: "6.5", r: "1", fill: "none" })
  );
});

export default NibSpeaker;
