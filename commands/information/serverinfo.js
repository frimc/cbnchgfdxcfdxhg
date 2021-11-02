module.exports = {
    name: "serverinfo",
    aliases: ['serwer'],
    description: "Wyświetla informacje o serwerze",
    category: "Praktyczne",
    reqperms: "Brak",
    usage: "prefixserverinfo",
    code: `$title[Informacje o serwerze]
$description[:keyboard: Nazwa serwera:
    $serverName

:crown: Właściciel serwera:
<@$ownerID> ($userTag[$ownerID])

:id: ID Serwera:
$guildID

📅 Stworzono:
$creationDate[$guildID;date]

<:puppy:903258782543523851> Premium: 
$replaceText[$replaceText[$checkCondition[$getServerVar[premium]==no];true;<:nie:903257441762938970> Nie];false;<:tak:903256753418956850> Tak]
]
$color[f70dff]
$footer[$userTag[$authorID] ($authorID);$authorAvatar]

$blackListIDs[$getGlobalUserVar[gban];{title:Błąd} {description:Na twoje konto nałożona została globalna blokada!\n\nPowód: $getGlobalUserVar[gbanreason]} {color:RED} {footer:$userTag[$authorID] ($authorID):$authorAvatar}]`
}