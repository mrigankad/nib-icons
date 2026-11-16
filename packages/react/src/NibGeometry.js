import { createElement as h, forwardRef } from 'react';

export const NibGeometry = forwardRef(function NibGeometry({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3l-8 15h16zM12 3v15", fill: "none" }),
    h('circle', { cx: "17", cy: "7", r: "3", fill: "none" })
  );
});

export default NibGeometry;
