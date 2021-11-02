module.exports = {
    name: "regulamin",
    aliases: ['rules'],
    description: "Wyświetla regulamin serwera",
    category: "Praktyczne",
    reqperms: "Brak",
    usage: "prefixregulamin",
    code: `$title[Regulamin serwera]
    $description[$getServerVar[regulamin]]
    $color[f70dff]
    $footer[$userTag ($authorID);$authorAvatar]
    $onlyIf[$getServerVar[regulamin]!=;{title:Błąd}{description:Administracja nie ustawiła regulaminu!}{color:RED}{footer:$userTag ($authorID):$authorAvatar}]
    $blackListIDs[$getGlobalUserVar[gban];{title:Błąd} {description:Na twoje konto nałożona została globalna blokada!\n\nPowód: $getGlobalUserVar[gbanreason]} {color:RED} {footer:$userTag[$authorID] ($authorID):$authorAvatar}]`
}