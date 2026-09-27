export function isExistingUser() {
  const userName = localStorage.getItem('username')

  if (!userName) {
    return false
  }
}