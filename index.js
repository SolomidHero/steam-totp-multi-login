let SteamTotp = require('steam-totp');
let accData = require('./data.json')

accountNames = process.argv.slice(2)

let verbose_index = accountNames.indexOf("-v")
let verbose = verbose_index > -1
if (verbose) {
  accountNames.splice(verbose_index, 1)
}

accountNames.forEach(name => {
  let code = SteamTotp.generateAuthCode(accData[name]["shared"]);
  let answer = name + ":\n  "

  for (const [key, value] of Object.entries(accData[name])) {
    if (verbose) {
      answer += key + ": " + value + "\n  "
    } else if (key == "pass") {
      answer += value + "\n  "
    }
  }

  console.log(answer + code + "\n")
});
