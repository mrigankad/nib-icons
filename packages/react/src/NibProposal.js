import { createElement as h, forwardRef } from 'react';

export const NibProposal = forwardRef(function NibProposal({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M12 10.5a2.5 2.5 0 0 0-1.5 4.5v1.5h3V15a2.5 2.5 0 0 0-1.5-4.5zM11 18.5h2", fill: "none" })
  );
});

export default NibProposal;
