import { createElement as h, forwardRef } from 'react';

export const NibMirrorHand = forwardRef(function NibMirrorHand({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "8", r: "6", fill: "none" }),
    h('path', { d: "M12 14v8M10.5 22h3M9.5 6.5l2-2M9.5 9.5l5-5", fill: "none" })
  );
});

export default NibMirrorHand;
