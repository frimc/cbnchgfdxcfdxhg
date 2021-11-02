module.exports = {
    name: "warn",
    description: "Warnuje użytkownika",
    usage: "prefixwarn <wzmianka> <powod>",
    reqperms: "Zarządzanie wiadomościami",
    code: `$title[WARN]
    $description[:hammer: Zwarnował: **$userTag[$authorID]**
    
    :bust_in_silhouette: Użytkownik: **$userTag[$mentioned[1]]**
    
    🏴 Powód: $noMentionMessage
    
    🔢 Warny: $sum[1;$getUserVar[warny]]]
    $thumbnail[$userAvatar[$mentioned[1]]]
    $setUserVar[warny;$sum[1;$getUserVar[warny]]
    $addTimestamp
    $footer[$userTag[$authorID] ($authorID);$authorAvatar]
    $onlyIf[$mentioned[1]!=;{title:Za mało argumentów}{description:Oznacz osobe którą chcesz zwarnować}{color:RED}{footer: $userTag[$authorID] ($authorID):$authorAvatar}]
    $onlyIf[$userExists[$mentioned[1]]!=false;{title:Błąd}{description:Taki użytkownik nie istnieje!}{color:RED}{footer: $userTag[$authorID] ($authorID):$authorAvatar}]
    $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];{title:Błąd}{description:Nie możesz zwarnować użytkownika który jest wyżej od ciebie!}{color:RED}{footer: $userTag[$authorID] ($authorID):$authorAvatar}]
    $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];{title:Błąd}{description:Bot nie może zwarnować użytkownika który jest wyżej odemnie!}{color:RED}{footer: $userTag[$authorID] ($authorID):$authorAvatar}]
    $onlyIf[$mentioned[1]!=$authorID;{title:Błąd} {description:Nie możesz zwarnować samego siebie!}{color:RED}{footer: $userTag[$authorID] ($authorID):$authorAvatar}]
    $onlyIf[$isBot[$mentioned[1]]!=true;{title:Błąd} {description:Nie możesz zwarnować bota!}{color:RED}{footer: $userTag[$authorID] ($authorID):$authorAvatar}]
    $onlyPerms[managemessages;{title:Brak uprawnień!} {description:Nie masz uprawnienia \`MANAGE_MESSAGES\`}{color:RED}{footer: $userTag[$authorID] ($authorID):$authorAvatar}]
    $blackListIDs[$getGlobalUserVar[gban];{title:Błąd} {description:Na twoje konto nałożona została globalna blokada!\n\nPowód: $getGlobalUserVar[gbanreason]} {color:RED} {footer:$userTag[$authorID] ($authorID):$authorAvatar}]
    `
}