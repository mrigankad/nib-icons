import { createElement as h, forwardRef } from 'react';

export const NibStudy = forwardRef(function NibStudy({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "6", r: "3", fill: "none" }),
    h('path', { d: "M12 15c-2-1.5-5-2-9-2v7c4 0 7 .5 9 2 2-1.5 5-2 9-2v-7c-4 0-7 .5-9 2zM12 15v7", fill: "none" })
  );
});

export default NibStudy;
