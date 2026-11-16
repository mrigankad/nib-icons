import { createElement as h, forwardRef } from 'react';

export const NibCurrencyExchange = forwardRef(function NibCurrencyExchange({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "7", cy: "7", r: "5", fill: "none" }),
    h('circle', { cx: "17", cy: "17", r: "5", fill: "none" }),
    h('path', { d: "M7 5v4M17 15v4M14 4h4v4M20 2l-2 2M10 20H6v-4M4 22l2-2", fill: "none" })
  );
});

export default NibCurrencyExchange;
