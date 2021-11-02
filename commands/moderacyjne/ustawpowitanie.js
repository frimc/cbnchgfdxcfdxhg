module.exports = {
    name: "kanalpowitanie",
    description: "Zmiana kanału Powitań",
    usage: "prefixprefigz <nowy prefigz> (napisałem przez gz bo sie podmienia)",
    category: "Moderacyjne",
    reqperms: "Zarządzanie serwerem",
    code:`$setServerVar[pkanał;$message.id]
    Ustawiono kanał na $message `}