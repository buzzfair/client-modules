import * as React from 'react';
const SvgAccessibility = ({ title, size, color, width, height, ...props }) =>
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
    React.createElement('path', {
      d:
        'M12 21a9 9 0 100-18 9 9 0 000 18zm0 1C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z',
    }),
    React.createElement('path', {
      d:
        'M11.966 5.81c-.841 0-1.527.68-1.527 1.515 0 .834.686 1.515 1.527 1.515.842 0 1.527-.68 1.527-1.515 0-.835-.685-1.515-1.527-1.515zm4.224 3.232c.266 0 .509.238.554.561.049.347-.146.663-.436.703l-3.398.473v2.113l1.833 4.36a.643.643 0 01-.594.88.649.649 0 01-.6-.394l-1.684-4.006-1.685 4.006a.649.649 0 01-.843.344.637.637 0 01-.35-.83l1.833-4.36V10.78l-3.399-.47c-.289-.04-.486-.357-.435-.704.045-.323.29-.561.554-.561.02 0 .04.002.06.004l3.282.456h1.965l3.282-.456a.282.282 0 01.06-.006z',
    })
  );
export default SvgAccessibility;
//# sourceMappingURL=AccessibilityIcon.js.map