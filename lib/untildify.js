const os = require("os")
const home = os.homedir()

module.exports = (string) => {
  return home ? string.replace(/^~($|\/|\\)/, `${home}$1`) : str
}
