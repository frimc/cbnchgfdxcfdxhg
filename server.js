const aoijs = require('aoi.js')
const config = require('./config.json')
const vars = require('./vars')
const bot = new aoijs.Bot({
    token: config.token,
    prefix: ["$getServerVar[prefix]", "Stealu v2"],
    suppressAll: false,
    errorMessage: "Błąd! Kod błędu: {error}"
})

bot.onMessage()
bot.loadCommands('./commands', false)
bot.loadCommands('./events', false)
bot.status({
    text: "ga!help | $serverCount Serwer/ów", // Co będzie w statusie
    type: "STREAMING", // Typ: STREAMING, LISTENING, PLAYING, WATCHING
    time: 12, // Tu nic nie zmieniasz
    url: "https://twitch.tv/help" // Tutaj nic nie zmieniaj to do statusu STRAMING
})
bot.command({
    name: "alwaysExecute",
    code: `$if[$message==puppy]
    działam
    $endif`
})

bot.variables(vars)