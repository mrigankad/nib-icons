import { createElement as h, forwardRef } from 'react';

export const NibShubhLabh = forwardRef(function NibShubhLabh({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3v18M3 12h18M12 3h6M12 21H6M3 12V6M21 12v6", fill: "none" }),
    h('circle', { cx: "7.5", cy: "7.5", r: ".8", fill: "none" }),
    h('circle', { cx: "16.5", cy: "7.5", r: ".8", fill: "none" }),
    h('circle', { cx: "7.5", cy: "16.5", r: ".8", fill: "none" }),
    h('circle', { cx: "16.5", cy: "16.5", r: ".8", fill: "none" })
  );
});

export default NibShubhLabh;
