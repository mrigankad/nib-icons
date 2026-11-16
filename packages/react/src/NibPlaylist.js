import { createElement as h, forwardRef } from 'react';

export const NibPlaylist = forwardRef(function NibPlaylist({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 6h12M3 11h12M3 16h7M19 17V8l2.5 1", fill: "none" }),
    h('circle', { cx: "16.5", cy: "17", r: "2.5", fill: "none" })
  );
});

export default NibPlaylist;
