import { createElement as h, forwardRef } from 'react';

export const NibBluetoothOff = forwardRef(function NibBluetoothOff({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 7l3.5 3.5M14 14l3 3-5 5v-8M12 6V2l5 5-2.5 2.5M3 3l18 18", fill: "none" })
  );
});

export default NibBluetoothOff;
