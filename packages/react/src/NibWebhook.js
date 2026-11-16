import { createElement as h, forwardRef } from 'react';

export const NibWebhook = forwardRef(function NibWebhook({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "6", r: "2.5", fill: "none" }),
    h('circle', { cx: "6", cy: "17", r: "2.5", fill: "none" }),
    h('circle', { cx: "18", cy: "17", r: "2.5", fill: "none" }),
    h('path', { d: "M10.8 8.2L7.3 14.8M8.5 17h7M13.2 8.2l3.5 6.6", fill: "none" })
  );
});

export default NibWebhook;
