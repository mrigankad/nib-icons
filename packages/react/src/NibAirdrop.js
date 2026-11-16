import { createElement as h, forwardRef } from 'react';

export const NibAirdrop = forwardRef(function NibAirdrop({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "13", r: "2", fill: "none" }),
    h('path', { d: "M7.5 17.5a6.5 6.5 0 1 1 9 0M4.5 20.5a10.5 10.5 0 1 1 15 0", fill: "none" })
  );
});

export default NibAirdrop;
