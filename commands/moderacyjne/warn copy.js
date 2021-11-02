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
    $addTimestamp
    $footer[$userTag[$authorID] ($authorID);$authorAvatar]
    $onlyIf[$mentioned[1]!=;]
    $onlyIf[$userExists[$mentioned[1]]!=false;]
    $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];]
    $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];]
    $onlyIf[$mentioned[1]!=$authorID;]
    $onlyIf[$isBot[$mentioned[1]]!=true;]
    $dm[$mentioned[1]]
    $onlyPerms[managemessages;]
    $blackListIDs[$getGlobalUserVar[gban];]
    `
}