import { createElement as h, forwardRef } from 'react';

export const NibVolumeHigh = forwardRef(function NibVolumeHigh({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 9h3l5-4v14l-5-4H4zM15.5 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11", fill: "none" })
  );
});

export default NibVolumeHigh;
