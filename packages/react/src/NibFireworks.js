import { createElement as h, forwardRef } from 'react';

export const NibFireworks = forwardRef(function NibFireworks({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 22V12M12 12V4M12 12H4M12 12h8M12 12L6 6M12 12l6-6M12 12l-6 6M12 12l6 6", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "1.5", fill: "#FFFFFF" })
  );
});

export default NibFireworks;
