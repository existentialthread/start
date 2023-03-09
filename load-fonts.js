if ('fonts' in document) {
  Promise.all([
    document.fonts.load('1em Lato'),
    document.fonts.load('700 1em Lato'),
    document.fonts.load('italic 1em Lato'),
    document.fonts.load('italic 700 1em Lato')
  ]).then(_ => () {
    document.documentElement.classList.add('fonts-loaded')
  })
}
