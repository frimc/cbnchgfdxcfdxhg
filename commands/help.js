module.exports = {
    name: "help",
    description: "Pomoc",
    usage: "prefixhelp",
    reqperms: "Brak",
    code: `$if[$message==]
    $title[Pomoc]
 
    $description[
    Zaufało nam **$serverCount** Serwerów!

    :gear:・Moderacyjne
    > vwarn\`, \`clear\`, \`ustawregulamin\`, \`usunregulamin\`
    
    :robot:・Bot
    > \`help\`, \`nakladka\`

    <a:discord:903262193640939590>・Praktyczne
    > \`serverinfo\`, \`regulamin\`

    :moneybag:・Premium
    > \`friend\`

    🥔・Ping: 
    > \`$botPing ms\`


    🔵・Linki
    [Strona](https://discord.com/oauth2/authorize?client_id=784534071119839242&permissions=8&scope=applications.commands%20bot) | [Zaproś](https://discord.com/oauth2/authorize?client_id=784534071119839242&permissions=8&scope=applications.commands%20bot)]

    
    $color[f70dff]
    $footer[$userTag[$authorID] ($authorID);$authorAvatar]
    $elseif[$message==$commandInfo[$message;name]]
    $title[Pomoc komendy]
    $color[f70dff]
    $addTimestamp
    $description[
        :keyboard: Nazwa: $message
        :mag: Opis: $commandInfo[$message;description]
        :mouse_three_button: Użycie: $replaceText[$commandInfo[$message[1];usage];prefix;$getServerVar[prefix]]
        :tickets: Wymagane uprawnienia: $commandInfo[$message;reqperms]
    ]
    $footer[$userTag[$authorID] ($authorID);$authorAvatar]
    $endelseif
    $addTimestamp
    $elseif[$commandInfo[$message;name]==]
    :x: Taka komenda nie istnieje!
    Jeżeli próbojesz wpisać alias pamiętaj **ŻE NIE DZIAŁA** z aliasami
    $endelseif
    $endif
    $blackListIDs[$getGlobalUserVar[gban];{title:Błąd} {description:Na twoje konto nałożona została globalna blokada!\n\nPowód: $getGlobalUserVar[gbanreason]} {color:RED} {footer:$userTag[$authorID] ($authorID):$authorAvatar}]`
}       