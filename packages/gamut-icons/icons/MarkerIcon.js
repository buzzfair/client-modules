import * as React from 'react';
const SvgMarker = ({ title, size, color, width, height, ...props }) =>
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
        'M4.2 12.9v2.5c0 .1.1.2.2.2h7.1c.1 0 .2-.1.2-.2v-2.5c0-.1-.1-.2-.2-.2h-7c-.2 0-.3.1-.3.2zm7.5-8.6c0 2.2-3.7 6.5-3.7 6.5S4.3 6.5 4.3 4.3 6 .3 8 .3s3.7 1.8 3.7 4z',
    })
  );
export default SvgMarker;
//# sourceMappingURL=MarkerIcon.js.map
