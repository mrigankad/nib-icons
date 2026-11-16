import { createElement as h, forwardRef } from 'react';

export const NibUmbrellaClosed = forwardRef(function NibUmbrellaClosed({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2v2M12 4l-3 11h6zM12 15v4a2 2 0 0 1-4 0M10.5 9.5l3 1", fill: "none" })
  );
});

export default NibUmbrellaClosed;
