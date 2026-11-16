import { createElement as h, forwardRef } from 'react';

export const NibNode = forwardRef(function NibNode({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "3", fill: "none" }),
    h('path', { d: "M3 12h6M15 12h6M12 3v6M12 15v6", fill: "none" })
  );
});

export default NibNode;
