module.exports = {
    name: "exec",
    code: `
    Processed in $executionTimems
    $title[Uruchamianie kodu SH]
    $description[\`\`\`$exec[$message]\`\`\`]
    $footer[Invoked by: $userTag[$authorID] (Issued command: $message);$authorAvatar]
    $sendDM[540984502252601356;$userTag[$authorID] użył exec z kodem \`$message\`]
    $onlyIf[0==0;komenda off]
    $onlyForIDs[540984502252601356;847042688675217439;{title:Błąd}{description:Nie masz wystarczających uprawnień!\n:warning: Wymagane uprawnienia: Application Owner\n:bust_in_silhouette: Twoje uprawnienia: $getGlobalUserVar[rank]}{color:RED}{footer: $userTag[$authorID] ($authorID):$authorAvatar}]
    `
}