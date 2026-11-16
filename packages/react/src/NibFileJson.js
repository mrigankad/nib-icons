import { createElement as h, forwardRef } from 'react';

export const NibFileJson = forwardRef(function NibFileJson({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M10.5 11.5c-1 0-1.5.5-1.5 1.5v.5c0 .7-.4 1-1 1 .6 0 1 .3 1 1v.5c0 1 .5 1.5 1.5 1.5M13.5 11.5c1 0 1.5.5 1.5 1.5v.5c0 .7.4 1 1 1-.6 0-1 .3-1 1v.5c0 1-.5 1.5-1.5 1.5", fill: "none" })
  );
});

export default NibFileJson;
