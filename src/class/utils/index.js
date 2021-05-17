function today() {
  return (new Date()).toJSON().slice(0, 10)
}

function isOlder(d1, d2) {
  return (new Date(d1)).getTime() < (new Date(d2)).getTime()
}

export { today, isOlder }