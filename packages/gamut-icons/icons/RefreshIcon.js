import * as React from 'react';
const SvgRefresh = ({ title, size, color, width, height, ...props }) =>
  React.createElement(
    'svg',
    Object.assign(
      {
        viewBox: '0 0 32 32',
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
        'M16.4 29.4c-6-.6-10.4-6.2-9.8-12.2s6.2-10.4 12.2-9.8c1.8.2 3.4.8 4.6 1.6l-5.8 3.2 1 1.8 9-4.6-4.6-9-1.8 1 3 6c-1.6-1-3.4-1.6-5.2-1.8C11.8 4.8 5.4 10 4.6 17 3.8 24.2 9 30.6 16 31.4c4 .4 7.8-1 10.4-3.6L25 26.4c-2.2 2.2-5.4 3.4-8.6 3z',
    })
  );
export default SvgRefresh;
//# sourceMappingURL=RefreshIcon.js.map
