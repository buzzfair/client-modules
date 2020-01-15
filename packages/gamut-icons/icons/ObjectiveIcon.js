import * as React from 'react';
const SvgObjective = ({ title, size, color, width, height, ...props }) =>
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
        'M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14 14-6.2 14-14S23.8 2 16 2zm0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12-5.4 12-12 12z',
    }),
    React.createElement('path', {
      fill: color || 'currentColor',
      d:
        'M16 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.4 0-6-2.6-6-6s2.6-6 6-6 6 2.6 6 6-2.6 6-6 6z',
    }),
    React.createElement('path', {
      fill: color || 'currentColor',
      d: 'M18 16a2 2 0 11-3.999.001A2 2 0 0118 16z',
    })
  );
export default SvgObjective;
//# sourceMappingURL=ObjectiveIcon.js.map