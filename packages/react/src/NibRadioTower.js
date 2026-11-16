import { createElement as h, forwardRef } from 'react';

export const NibRadioTower = forwardRef(function NibRadioTower({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "7", r: "2", fill: "none" }),
    h('path', { d: "M8 21l4-12 4 12M9.3 17h5.4M7.5 3.5a6 6 0 0 0 0 7M16.5 3.5a6 6 0 0 1 0 7", fill: "none" })
  );
});

export default NibRadioTower;
