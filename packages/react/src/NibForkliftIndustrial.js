import { createElement as h, forwardRef } from 'react';

export const NibForkliftIndustrial = forwardRef(function NibForkliftIndustrial({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 17v-6h5l2-6h3v12M15 3v16h7M12 12h3", fill: "none" }),
    h('rect', { x: "17", y: "12", width: "5", height: "4", fill: "none" }),
    h('circle', { cx: "5", cy: "19", r: "2", fill: "none" }),
    h('circle', { cx: "11", cy: "19", r: "2", fill: "none" })
  );
});

export default NibForkliftIndustrial;
