// exportable media queries to globalize styled components

export const breakpoints = {
  tablet: 732,
  desktop: 1100
}

export const mediaQueries = key => {
  return style => `@media (min-width: ${breakpoints[key]}px) { ${style} }`
}