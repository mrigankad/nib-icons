import { createElement as h, forwardRef } from 'react';

export const NibJoystickArcade = forwardRef(function NibJoystickArcade({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "5", r: "3", fill: "none" }),
    h('path', { d: "M12 8v7M3 17l2-2h14l2 2v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z", fill: "none" })
  );
});

export default NibJoystickArcade;
