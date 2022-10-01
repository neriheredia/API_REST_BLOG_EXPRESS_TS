
const returnFirstLetter = (string:string) => string.split('', 1).join().toUpperCase()

export const createAvatarDefault = (firstName: string, lastName: string) => {
  const first = returnFirstLetter(firstName)
  const second = returnFirstLetter(lastName)
  return `${first}${second}`
}
