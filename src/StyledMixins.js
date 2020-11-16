// exportable media queries to globalize styled components

 const breakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  desktop: 1024,
  desktopL: 1440
}

export const mq = key => {
  return style => `@media (min-width: ${breakpoints[key]}px) { ${style} }`
}