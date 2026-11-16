import { createElement as h, forwardRef } from 'react';

export const NibExchangeCurrency = forwardRef(function NibExchangeCurrency({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "8", cy: "8", r: "5.5", fill: "none" }),
    h('path', { d: "M18.5 10.8A5.5 5.5 0 1 1 10.8 18.5M8 6v4M16 14v4M3 17l2 2 2-2M21 7l-2-2-2 2", fill: "none" })
  );
});

export default NibExchangeCurrency;
