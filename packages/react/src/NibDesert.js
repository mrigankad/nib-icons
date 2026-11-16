import { createElement as h, forwardRef } from 'react';

export const NibDesert = forwardRef(function NibDesert({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "18", cy: "5", r: "2", fill: "none" }),
    h('path', { d: "M2 20c4-4 8-4 12-1M10 20c3-3 8-4 12-2M7 16V8M7 13H5V10M7 11h2V9", fill: "none" })
  );
});

export default NibDesert;
