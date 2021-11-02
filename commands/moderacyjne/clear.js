module.exports = {
    name: "clear",
    description: "Usuwa wiadomości z kanału",
    usage: "prefixclear <liczba>",
    reqperms: "Zarządzanie wiadomościami",
    code: `$title[Wyczyszczono]
    $description[:wastebasket: Usunięto \`$message[1]\` wiadomości!]
    $argsCheck[1;{title:Za mało argumentów}{description:Wprowadź liczbę wiadomości do usunięcia!}{color:RED}{footer: $userTag[$authorID] ($authorID):$authorAvatar}]
    $clear[$message]
    $footer[$userTag[$authorID] ($authorID);$authorAvatar]
    $color[GREEN]
    $deleteIn[5s]
    $onlyIf[$message[1]<51;{title:Błąd}{description:Możesz usunąć max 50 wiadomości na komendę!!}{footer: $userTag[$authorID] ($authorID):$authorAvatar}{color:RED}]
    $onlyPerms[managemessages;{title:Brak uprawnień}{description:Nie masz uprawnienia \`MANAGE_MESSAGES\`!}{footer: $userTag[$authorID] ($authorID):$authorAvatar}{color:RED}]
    $onlyBotPerms[managemessages;{title:Błąd}{description:Bot nie posiada uprawnienia \`MANAGE_MESSAGES\`!}{footer: $userTag[$authorID] ($authorID):$authorAvatar}{color:RED}]
    $blackListIDs[$getGlobalUserVar[gban];{title:Błąd} {description:Na twoje konto nałożona została globalna blokada!\n\nPowód: $getGlobalUserVar[gbanreason]} {color:RED} {footer:$userTag[$authorID] ($authorID):$authorAvatar}]`
}