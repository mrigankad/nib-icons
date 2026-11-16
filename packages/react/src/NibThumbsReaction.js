import { createElement as h, forwardRef } from 'react';

export const NibThumbsReaction = forwardRef(function NibThumbsReaction({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "10", fill: "none" }),
    h('path', { d: "M8 11v6M8 11l3-5a2 2 0 0 1 2 2v2h3a1 1 0 0 1 1 1.2l-.8 4.5a1.5 1.5 0 0 1-1.5 1.3H8", fill: "none" })
  );
});

export default NibThumbsReaction;
