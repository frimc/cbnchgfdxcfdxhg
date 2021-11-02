module.exports = {
    name: "nakladka",
    description: "Generuję dla ciebie nakładke",
    usage: "prefixnakladka",
    reqperms: "Brak",
    code: `$djsEval[
        (async () => {
        const Canvas = require('canvas')
        const Discord = require('discord.js')
    const canvas = Canvas.createCanvas(1000, 1000);
    const ctx = canvas.getContext('2d');



    const background = await Canvas.loadImage(message.author.displayAvatarURL({dynamic: true, format: 'png', size: 2048}));    
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  
    const avatar = await Canvas.loadImage('./nakladka.png');
    ctx.drawImage(avatar, 0, 0, 1000, 1000);

    const koniec = new Discord.MessageAttachment(canvas.toBuffer(), 'nakladka.png');

   

    message.channel.send('**Wygenerowano Nakladke!**', koniec)
    })();no]
    $blackListIDs[$getGlobalUserVar[gban];{title:Błąd} {description:Na twoje konto nałożona została globalna blokada!\n\nPowód: $getGlobalUserVar[gbanreason]} {color:RED} {footer:$userTag[$authorID] ($authorID):$authorAvatar}]`
}