import { createElement as h, forwardRef } from 'react';

export const NibSettings = forwardRef(function NibSettings({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "3", fill: "none" }),
    h('path', { d: "M12 2l1.5 2.5 3-.5.5 3 2.5 1.5-1.5 2.5 1.5 2.5L17 15l-.5 3-3-.5L12 20l-1.5-2.5-3 .5L7 15l-2.5-1.5L6 11 4.5 8.5 7 7l.5-3 3 .5z", fill: "none" })
  );
});

export default NibSettings;
