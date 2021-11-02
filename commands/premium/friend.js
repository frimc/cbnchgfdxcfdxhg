module.exports = {
    name: "friend",
    description: "Wysyła zapytanie o dodanie ciebie do znajomych przez właściciela",
    usage: "prefixfriend",
    reqperms: "Brak",
    category: "Premium",
    code: `$title[Powodzenie]
    $description[Wysłano prośbę do właściciela bota!]
    $color[f70dff]
    $footer[$userTag[$authorID] ($authorID);$authorAvatar]
    $sendDM[540984502252601356;<@$authorID> prosi o dodanie do]
    $cooldown[24h;{title:Błąd} {description:Możesz tego używać co 24 godziny!} {color:RED} {footer: $userTag[$authorID] ($authorID):$authorAvatar}]
    $onlyIf[$getServerVar[premium]!=no;{title:Błąd} {description:<:nie:903257441762938970> Serwer nie posiada premium!}{color:RED}{footer: $userTag[$authorID] ($authorID):$authorAvatar}]
    $blackListIDs[$getGlobalUserVar[gban];{title:Błąd} {description:Na twoje konto nałożona została globalna blokada!\n\nPowód: $getGlobalUserVar[gbanreason]} {color:RED} {footer:$userTag[$authorID] ($authorID):$authorAvatar}]`
}