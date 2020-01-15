import * as React from 'react';
const SvgLinkedin = ({ title, size, color, width, height, ...props }) =>
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
        'M5.6 8.2c0-1.4 0-2.5-.1-3.5h2.9l.2 1.5h.1c.4-.7 1.5-1.8 3.4-1.8 2.2 0 3.9 1.5 3.9 4.7v6.4h-3.4v-6c0-1.4-.5-2.4-1.7-2.4-.9 0-1.5.6-1.7 1.3-.2.3-.2.6-.2.9v6.3H5.6V8.2zM.1 4.9h3.4v10.9H.1V4.9zm3.5-3c0 .9-.7 1.7-1.8 1.7S0 2.8 0 1.9C0 .9.7.2 1.8.2 3 .2 3.6.9 3.6 1.9z',
    })
  );
export default SvgLinkedin;
//# sourceMappingURL=LinkedinIcon.js.map
