export const numbersOnlyMask = (string: string) =>
  string.replace(/[^0-9]+/g, '')
