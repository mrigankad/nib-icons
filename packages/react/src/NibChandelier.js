import { createElement as h, forwardRef } from 'react';

export const NibChandelier = forwardRef(function NibChandelier({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2v8M4 10c0 3 3 5 8 5s8-2 8-5M12 15v4M10 19h4M4 10V8M12 10V8M20 10V8", fill: "none" }),
    h('path', { d: "M4 5.5c.8.8.8 1.5 0 2.5-.8-1-.8-1.7 0-2.5zM12 5.5c.8.8.8 1.5 0 2.5-.8-1-.8-1.7 0-2.5zM20 5.5c.8.8.8 1.5 0 2.5-.8-1-.8-1.7 0-2.5z", fill: "none" })
  );
});

export default NibChandelier;
