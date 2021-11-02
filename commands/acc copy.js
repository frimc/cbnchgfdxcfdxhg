module.exports = {
    name: "aeval",
    code: `
    $if[$getGlobalUserVar[rank]==Owner+]
    :wrench:・AEval
    📥 In: $message
    📤 Out: $eval[$message;yes]
    $else
    $title[Błąd]
    $description[Nie masz wystarczających uprawnień!
    :warning: Wymagane uprawnienia: Zjeb++
    :bust_in_silhouette: Twoje uprawnienia: $getGlobalUserVar[rank]]
    $footer[$userTag[$authorID] ($authorID);$authorAvatar]
    $color[f70dff]
    $endif
    `
}