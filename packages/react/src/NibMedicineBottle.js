import { createElement as h, forwardRef } from 'react';

export const NibMedicineBottle = forwardRef(function NibMedicineBottle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "6", y: "2", width: "12", height: "4", rx: "1", fill: "none" }),
    h('path', { d: "M7 6v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6M12 11v6M9 14h6", fill: "none" })
  );
});

export default NibMedicineBottle;
