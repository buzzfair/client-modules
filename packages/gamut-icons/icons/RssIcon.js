import * as React from 'react';
const SvgRss = ({ title, size, color, width, height, ...props }) =>
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
        'M4.3 13.8c0 1.2-1 2.2-2.2 2.2C1 16 0 15 0 13.8s1-2.2 2.2-2.2c1.2.1 2.1 1 2.1 2.2zM0 5.5v3.2c4 0 7.3 3.3 7.3 7.3h3.2C10.5 10.2 5.8 5.5 0 5.5zm0-2.3c3.4 0 6.6 1.3 9 3.8 2.4 2.4 3.7 5.6 3.8 9H16C16 7.2 8.8 0 0 0v3.2z',
    })
  );
export default SvgRss;
//# sourceMappingURL=RssIcon.js.map
