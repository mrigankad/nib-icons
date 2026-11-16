import { createElement as h, forwardRef } from 'react';

export const NibFirstAid = forwardRef(function NibFirstAid({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "6", width: "20", height: "15", rx: "2", fill: "none" }),
    h('path', { d: "M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M12 10v7M8.5 13.5h7", fill: "none" })
  );
});

export default NibFirstAid;
