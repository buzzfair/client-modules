import * as React from 'react';
const SvgLifePreserver = ({ title, size, color, width, height, ...props }) =>
  React.createElement(
    'svg',
    Object.assign(
      {
        fill: color || 'currentColor',
        viewBox: '0 0 24 24',
        width: size || width || '1em',
        height: size || height || '1em',
        role: 'img',
      },
      props
    ),
    React.createElement('title', null, title),
    React.createElement(
      'g',
      { fillRule: 'evenodd' },
      React.createElement('path', {
        d:
          'M5.227 8.631L8.18 10.44a4.134 4.134 0 00.268 3.66L5.51 15.886a7.578 7.578 0 01-.284-7.256zm2.886-3.12a7.575 7.575 0 017.774 0l-1.788 2.937a4.132 4.132 0 00-4.198 0L8.113 5.511zm7.259 13.26a7.582 7.582 0 01-6.741.002l1.808-2.953a4.14 4.14 0 003.133-.005l1.8 2.957zm3.119-2.886l-2.933-1.796a4.134 4.134 0 00.261-3.65l2.954-1.808a7.578 7.578 0 01-.282 7.254z',
      }),
      React.createElement('path', {
        d:
          'M12 16.125a4.125 4.125 0 110-8.25 4.125 4.125 0 010 8.25zm0-.917a3.208 3.208 0 100-6.416 3.208 3.208 0 000 6.416z',
        fillRule: 'nonzero',
      }),
      React.createElement('path', {
        d:
          'M12 20.25a8.25 8.25 0 110-16.5 8.25 8.25 0 010 16.5zm0-1.833a6.417 6.417 0 100-12.834 6.417 6.417 0 000 12.834z',
        fillRule: 'nonzero',
      })
    )
  );
export default SvgLifePreserver;
//# sourceMappingURL=LifePreserverIcon.js.map