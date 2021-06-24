export const phoneNumberUSAMask = (string: string) => {
  const numbersOnly = string.replace(/\D/g, '')
  const matchedGroups = numbersOnly.match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
  if (matchedGroups === null) return numbersOnly
  return !matchedGroups[2]
    ? matchedGroups[1]
    : '(' +
        matchedGroups[1] +
        ') ' +
        matchedGroups[2] +
        (matchedGroups[3] ? '-' + matchedGroups[3] : '')
}
