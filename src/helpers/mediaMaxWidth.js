const mediaMaxWidth = (size, child) => {
  return `
  @media all and (max-width: ${size}px) {
    ${child}
  }
  `
}
export default mediaMaxWidth
