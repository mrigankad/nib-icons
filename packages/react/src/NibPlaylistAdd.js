import { createElement as h, forwardRef } from 'react';

export const NibPlaylistAdd = forwardRef(function NibPlaylistAdd({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 6h12M3 11h12M3 16h7M18 13v6M15 16h6", fill: "none" })
  );
});

export default NibPlaylistAdd;
