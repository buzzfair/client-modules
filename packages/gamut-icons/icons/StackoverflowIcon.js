import * as React from 'react';
const SvgStackoverflow = ({ title, size, color, width, height, ...props }) =>
  React.createElement(
    'svg',
    Object.assign(
      {
        viewBox: '0 0 16 16',
        width: size || width || '1em',
        height: size || height || '1em',
        fill: color || 'currentColor',
        role: 'img',
      },
      props
    ),
    React.createElement('title', null, title),
    React.createElement('path', {
      fill: color || 'currentColor',
      d: 'M1.7 9.4V16h10.5V9.4h-1.1V15H2.8V9.4z',
    }),
    React.createElement('path', {
      fill: color || 'currentColor',
      d:
        'M3.7 12.4H10v1.4H3.7v-1.4zm.175-2.271l6.276.549-.122 1.395-6.276-.549.122-1.395zm.613-2.827l6.085 1.63-.362 1.352-6.085-1.63.362-1.352zm1.38-3.113l5.456 3.15-.7 1.212-5.456-3.15.7-1.212zM9.107 1.28l3.614 5.161-1.147.803L7.96 2.083l1.147-.803zm4.14-1.303l1.094 6.204-1.379.243L11.868.22l1.379-.243z',
    })
  );
export default SvgStackoverflow;
//# sourceMappingURL=StackoverflowIcon.js.map
