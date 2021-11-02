module.exports = {
    name: "prefix",
    aliases: ['ustawprefix'],
    description: "Zmienia prefix",
    usage: "prefixprefigz <nowy prefigz> (napisałem przez gz bo sie podmienia)",
    category: "Moderacyjne",
    reqperms: "Zarządzanie serwerem",
    code: `$title[Powodzenie]
    $addTimestamp
    $description[Ustawiono prefix]
    $setServerVar[prefix;$message]
    $color[f70dff]
    $onlyIf[$message!=;**Brak argumentu** : \`\`\`$getServerVar[prefix]prefix [wiadomosc]\`\`\`]
    $onlyPerms[manageserver;{title:Brak uprawnień}{description:Do wykonania komendy potrzebne jest uprawnienie Zarządzanie Serwerem}{color:RED}{footer:$userTag ($authorID):$authorAvatar}]
    `
    
}