module.exports = {
    name: "ustawregulamin",
    description: "Ustawia regulamin serwera",
    category: "Moderacyjne",
    reqperms: "Zarządzanie Serwerem",
    usage: "prefixustawregulamin <regulamin>",
    code: `
    $title[Powodzenie]
    $description[Ustawiono regulamin serwera!]
    $color[GREEN]
    $footer[$userTag ($authorID);$authorAvatar]
    $setServerVar[regulamin;$message]
    $onlyIf[$message!=;{title:Za mało argumentów} {description:Poprawne użycie komendy to \`$getServerVar[prefix]ustawregulamin <regulamin>\`}{color:RED}{footer:$userTag ($authorID):$authorAvatar}]
    $onlyPerms[manageserver;{title:Brak uprawnień}{description:Do wykonania komendy potrzebne jest uprawnienie Zarządzanie Serwerem}{color:RED}{footer:$userTag ($authorID):$authorAvatar}]
    $blackListIDs[$getGlobalUserVar[gban];{title:Błąd} {description:Na twoje konto nałożona została globalna blokada!\n\nPowód: $getGlobalUserVar[gbanreason]} {color:RED} {footer:$userTag[$authorID] ($authorID):$authorAvatar}]`

}