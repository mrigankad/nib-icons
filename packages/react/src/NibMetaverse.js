import { createElement as h, forwardRef } from 'react';

export const NibMetaverse = forwardRef(function NibMetaverse({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4l-2-2h-2l-2 2H5a2 2 0 0 1-2-2z", fill: "none" }),
    h('circle', { cx: "8", cy: "11.5", r: "1.5", fill: "none" }),
    h('circle', { cx: "16", cy: "11.5", r: "1.5", fill: "none" })
  );
});

export default NibMetaverse;
