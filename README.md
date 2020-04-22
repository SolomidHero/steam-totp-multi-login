## Steam TOTP Login for Node.js 

This is really simple application that allows you to store the data from multiple accounts and
get the TOTP-based Steam Authentication code for any of stored accounts.
Based on [`steam-totp`](https://www.npmjs.com/package/steam-totp)

## Installation
```bash
npm install
```

## Usage

Simply fill the credentials of your accounts to `data.json` file in format:
```javascript
{
  "%USERNAME%": {
    "shared": "%SHARED_SECRET%", // username and shared secret needed for Steam Guard
    "pass": "qwerty123"          // other credentials are not necessary but will be displayed
  }
}
```

Remember other credentials stored only for better usabilty of tool and not necessary for Steam Guard Code generation.

## Example
```bash
node index.js account_username

#{
#  "account_username": {
#    "shared": "1234567890abcdef12345678900=",
#    "pass": "qwerty123"
#  }
#}
```

