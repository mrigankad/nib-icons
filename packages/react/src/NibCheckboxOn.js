import { createElement as h, forwardRef } from 'react';

export const NibCheckboxOn = forwardRef(function NibCheckboxOn({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3.5", y: "3.5", width: "17", height: "17", rx: "3", fill: "none" }),
    h('path', { d: "M8 12.2l2.8 2.8L16 9.5", fill: "none" })
  );
});

export default NibCheckboxOn;
