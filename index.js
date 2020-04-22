var SteamTotp = require('steam-totp');
var accData = require('./data.json')

accountNames = process.argv.slice(2)

accountNames.forEach(name => {
  var code = SteamTotp.generateAuthCode(accData[name]["shared"]);  
  console.log(name + ":\n  " + accData[name]["pass"] + "\n  " + code)
});
