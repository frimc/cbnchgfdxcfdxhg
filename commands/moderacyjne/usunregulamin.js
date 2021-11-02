module.exports = {
    name: "usunregulamin",
    description: "Usuwa regulamin serwera",
    category: "Moderacyjne",
    reqperms: "Zarządzanie Serwerem",
    usage: "prefixusunregulamin",
    code: `
    $title[Powodzenie]
    $description[Usunięto regulamin serwera!]
    $color[GREEN]
    $footer[$userTag ($authorID);$authorAvatar]
    $setServerVar[regulamin;]
    $onlyIf[$getServerVar[regulamin]!=;{title:Błąd} {description:Regulamin jest już usunięty!}{color:RED}{footer:$userTag ($authorID):$authorAvatar}]
    $onlyPerms[manageserver;{title:Brak uprawnień}{description:Do wykonania komendy potrzebne jest uprawnienie Zarządzanie Serwerem}{color:RED}{footer:$userTag ($authorID):$authorAvatar}]
    $blackListIDs[$getGlobalUserVar[gban];{title:Błąd} {description:Na twoje konto nałożona została globalna blokada!\n\nPowód: $getGlobalUserVar[gbanreason]} {color:RED} {footer:$userTag[$authorID] ($authorID):$authorAvatar}]`

}