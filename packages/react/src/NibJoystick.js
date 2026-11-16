import { createElement as h, forwardRef } from 'react';

export const NibJoystick = forwardRef(function NibJoystick({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "16", width: "16", height: "5", rx: "1.5", fill: "none" }),
    h('circle', { cx: "12", cy: "6", r: "3", fill: "none" }),
    h('path', { d: "M12 9v7M7 18.5h1.5", fill: "none" })
  );
});

export default NibJoystick;
