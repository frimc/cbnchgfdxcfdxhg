module.exports = {
    name: "$alwaysExegbvcute",
    code: `
    $let[command;$charCount[$getServerVar[prefix]]]
    $let[slice;$textSlice[$message;$get[command]]]
    $onlyIf[$commandInfo[$get[command];name]!=;Nie ma takiej komendy]

    
`
}