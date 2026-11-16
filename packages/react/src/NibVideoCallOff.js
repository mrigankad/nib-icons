import { createElement as h, forwardRef } from 'react';

export const NibVideoCallOff = forwardRef(function NibVideoCallOff({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 6h4a2 2 0 0 1 2 2v2l6-3.5v11L15 14v2M15 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2M2 2l20 20", fill: "none" })
  );
});

export default NibVideoCallOff;
