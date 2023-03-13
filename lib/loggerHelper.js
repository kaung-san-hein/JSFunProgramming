const loggerHelper = (mode, initialMessage, errorMessage, lineNo) => {
  if (mode === 'DEBUG')
    console.debug(initialMessage, errorMessage + 'at line: ' + lineNo)
  else if (mode === 'ERROR')
    console.error(initialMessage, errorMessage + 'at line: ' + lineNo)
  else if (mode === 'WARN')
    console.warn(initialMessage, errorMessage + 'at line: ' + lineNo)
  else throw 'Wrong mode'
}

export default loggerHelper