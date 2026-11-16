import { createElement as h, forwardRef } from 'react';

export const NibTimerCamera = forwardRef(function NibTimerCamera({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "13", r: "8", fill: "none" }),
    h('path', { d: "M12 9v4l2.5 2M10 2h4M18.5 6l1.5-1.5", fill: "none" })
  );
});

export default NibTimerCamera;
