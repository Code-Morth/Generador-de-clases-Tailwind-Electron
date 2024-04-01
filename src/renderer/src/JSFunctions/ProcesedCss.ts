const ProcesedCss = (data: any) => {
  const regex = /className="([^"]*)"/g

  const classesArray: string[] = []
  let match

  while ((match = regex.exec(data)) !== null) {
    const classes: [] = match[1].split(' ')

    classesArray.push(...classes)
  }

  let cssText = ' '

  classesArray.forEach((className) => {
    if (className.trim() !== '') {
      cssText += `.${className.trim()} {\n`
      cssText += `  @apply ;\n\n`
      cssText += `  @screen tablet {\n`
      cssText += `    @apply ;\n`
      cssText += `  }\n\n`
      cssText += `  @screen laptop {\n`
      cssText += `    @apply ;\n`
      cssText += `  }\n`
      cssText += `}\n\n`
    }
  })

  return cssText
}

export default ProcesedCss
