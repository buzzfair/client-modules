import * as React from 'react';
const SvgGplus = ({ title, size, color, width, height, ...props }) =>
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
      d:
        'M16 3.5h-2.1v2.1h-1.1V3.5h-2.1v-1h2.1V.4h1.1v2.1H16v1zm-6 8.8c0 1.6-1.5 3.5-5.1 3.5-2.7 0-4.9-1.2-4.9-3.1 0-1.5.9-3.4 5.4-3.4-.7-.5-.8-1.3-.4-2.1-2.6 0-4-1.5-4-3.4S2.4.2 5.3.2h4.6l-1 1.1H7.7C8.5 1.7 9 2.7 9 3.8c0 1-.6 1.8-1.4 2.5-1.4 1.1-1 1.7.5 2.8C9.5 10.2 10 11 10 12.3zM7.1 3.9c-.2-1.6-1.3-3-2.5-3S2.5 2.1 2.7 3.7C3 5.4 4.2 6.5 5.4 6.5c1.2.1 1.9-1 1.7-2.6zm1.3 8.6c0-1.3-1.2-2.6-3.3-2.6-1.8 0-3.4 1.2-3.4 2.5C1.7 13.8 3 15 4.9 15c2.4 0 3.5-1.1 3.5-2.5z',
    })
  );
export default SvgGplus;
//# sourceMappingURL=GplusIcon.js.map