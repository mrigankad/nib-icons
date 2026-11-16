import { createElement as h, forwardRef } from 'react';

export const NibKeyRound = forwardRef(function NibKeyRound({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "7.5", r: "5", fill: "none" }),
    h('circle', { cx: "12", cy: "6.5", r: "1.5", fill: "none" }),
    h('path', { d: "M12 12.5V21M12 17h3M12 20h2", fill: "none" })
  );
});

export default NibKeyRound;
