export const mediaQuery = (size, ...css) =>
  `
    @media (max-width: ${size}{
      ${css.map(item =>
    `${item.title}: ${item.value};`
  )}
    })
`
