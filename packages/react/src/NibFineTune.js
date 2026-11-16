import { createElement as h, forwardRef } from 'react';

export const NibFineTune = forwardRef(function NibFineTune({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2l8 4.5v9L12 20l-8-4.5v-9zM8 10h8M8 14h8", fill: "none" }),
    h('circle', { cx: "10", cy: "10", r: "1.2", fill: "none" }),
    h('circle', { cx: "14", cy: "14", r: "1.2", fill: "none" })
  );
});

export default NibFineTune;
