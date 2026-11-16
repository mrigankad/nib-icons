import { createElement as h, forwardRef } from 'react';

export const NibZipper = forwardRef(function NibZipper({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2v6M10 4h2M12 6h2M10 8h4l1 4-3 3-3-3zM12 15v7M10 17h2M12 19h2M10 21h2", fill: "none" }),
    h('circle', { cx: "12", cy: "11.5", r: ".8", fill: "none" })
  );
});

export default NibZipper;
