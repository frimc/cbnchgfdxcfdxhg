module.exports = {
    name: "eval",
    code: `$if[$getGlobalUserVar[rank]==Owner]
    $djsEval[$message]
    $suppressErrors
    $elseif[$getGlobalUserVar[rank]==Owner+]
$title[:wrench:・Eval]
$description[📥 In :
\`\`\`$message\`\`\`
📤 Out:
\`\`\`$djsEval[$message;yes]\`\`\`]
$color[GREEN]
$footer[$userTag[$authorID] ($authorID);$authorAvatar]
    $suppressErrors
    $endelseif
    $else
    $title[Błąd]
    $description[Nie masz wystarczających uprawnień!
    :warning: Wymagane uprawnienia: Owner
    :bust_in_silhouette: Twoje uprawnienia: $getGlobalUserVar[rank]]
    $footer[$userTag[$authorID] ($authorID);$authorAvatar]
    $color[RED]
    $endif
    $suppressErrors
    `
}