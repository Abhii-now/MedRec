export function getUser(user) {
  if (user != undefined) {
    const accnt = user.slice(0, 3) + "******" + user.slice(-5);
    return accnt;
  }
}
