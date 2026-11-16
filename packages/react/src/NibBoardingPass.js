import { createElement as h, forwardRef } from 'react';

export const NibBoardingPass = forwardRef(function NibBoardingPass({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "5", width: "20", height: "14", rx: "2", fill: "none" }),
    h('path', { d: "M16 5v14M5 13l3-1 3-3 1 .5-1.5 3 2-.5.5 1-5 1.5zM18.5 9h1M18.5 12h1M18.5 15h1", fill: "none" })
  );
});

export default NibBoardingPass;
