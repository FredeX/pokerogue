import { SimpleTranslationEntries } from "#app/plugins/i18n";

/**
 * The menu namespace holds most miscellaneous text that isn't directly part of the game's
 * contents or directly related to Pokemon data. This includes menu navigation, settings,
 * account interactions, descriptive text, etc.
 */
export const menu: SimpleTranslationEntries = {
  "cancel": "Annulla",
  "continue": "Continua",
  "newGame": "Nuova partita",
  "loadGame": "Carica partita",
  "settings": "Impostazioni",
  "dailyRun": "Run giornaliera (Beta)",
  "selectGameMode": "Seleziona una modalità di gioco.",
  "logInOrCreateAccount": "Accedi o crea un nuovo account per iniziare. Non è richiesta un'email!",
  "username": "Nome utente",
  "password": "Password",
  "login": "Accedi",
  "register": "Registrati",
  "emptyUsername": "Nome utente mancante!",
  "invalidLoginUsername": "Nome utente non valido!",
  "invalidRegisterUsername": "Il nome utente può contenere solo lettere, numeri o trattini bassi",
  "invalidLoginPassword": "Password non valida!",
  "invalidRegisterPassword": "La password deve contenere almeno 6 caratteri",
  "usernameAlreadyUsed": "Il nome utente inserito è stato già utilizzato!",
  "accountNonExistent": "Account inesistente!",
  "unmatchingPassword": "La password inserita non è corretta!",
  "passwordNotMatchingConfirmPassword": "La password deve essere uguale alla conferma password!",
  "confirmPassword": "Conferma password",
  "registrationAgeWarning": "Registrandoti confermi di avere 13 anni o più.",
  "backToLogin": "Torna all'accesso",
  "failedToLoadSaveData": "Impossibile caricare i dati di salvataggio. Ricarica la pagina.\nSe il problema persiste, contatta l'amministratore.",
  "sessionSuccess": "Sessione caricata correttamente.",
  "failedToLoadSession": "Impossibile caricare i dati della sessione.\nPotrebbero essere danneggiati.",
  "boyOrGirl": "Sei un ragazzo o una ragazza?",
  "boy": "Ragazzo",
  "girl": "Ragazza",
  "dailyRankings": "Classifica giornaliera",
  "weeklyRankings": "Classifica settimanale",
  "noRankings": "Nessuna classifica",
  "positionIcon": "#",
  "usernameScoreboard": "Username",
  "score": "Score",
  "wave": "Wave",
  "loading": "Caricamento…",
  "loadingAsset": "Caricamento asset: {{assetName}}",
  "playersOnline": "Giocatori online",
  "evolving": "Cosa?\n{{pokemonName}} si sta evolvendo!",
  "stoppedEvolving": "{{pokemonName}} ha smesso di evolversi.",
  "pauseEvolutionsQuestion": "Vuoi sospendere le evoluzioni per {{pokemonName}}?\nPossono essere riattivate dalla schermata del party.",
  "evolutionsPaused": "Le evoluzioni sono state sospese per {{pokemonName}}.",
  "evolutionDone": "Congratulazioni!\n{{pokemonName}} si è evoluto in {{evolvedPokemonName}}!",
  "yes":"Si",
  "no":"No",
  "disclaimer": "DISCLAIMER",
  "disclaimerDescription": "Questo gioco è un prodotto incompleto; si potrebbero riscontrare errori (inclusa la perdita dei dati di salvataggio),\ncambiamenti impercettibili, e non è detto che venga aggiornato nel tempo o mai completato del tutto.",
  "general": "General",
  "display": "Display",
  "audio": "Audio",
  "gamepad": "Gamepad",
  "keyboard": "Keyboard",
  "gameSpeed": "Game Speed",
  "hpBarSpeed": "HP Bar Speed",
  "expGainsSpeed": "EXP Gains Speed",
  "expPartyDisplay": "Show EXP Party",
  "skipSeenDialogues": "Skip Seen Dialogues",
  "battleStyle": "Battle Style",
  "enableRetries": "Enable Retries",
  "tutorials": "Tutorials",
  "touchControls": "Touch Controls",
  "vibrations": "Vibrations",
  "normal": "Normal",
  "fast": "Fast",
  "faster": "Faster",
  "skip": "Skip",
  "levelUpNotifications": "Level Up Notifications",
  "on": "On",
  "off": "Off",
  "switch": "Switch",
  "set": "Set",
  "auto": "Auto",
  "disabled": "Disabled",
  "language": "Language",
  "change": "Change",
  "uiTheme": "UI Theme",
  "default": "Default",
  "legacy": "Legacy",
  "windowType": "Window Type",
  "moneyFormat": "Money Format",
  "damageNumbers": "Damage Numbers",
  "simple": "Simple",
  "fancy": "Fancy",
  "abbreviated": "Abbreviated",
  "moveAnimations": "Move Animations",
  "showStatsOnLevelUp": "Show Stats on Level Up",
  "candyUpgradeNotification": "Candy Upgrade Notification",
  "passivesOnly": "Passives Only",
  "candyUpgradeDisplay": "Candy Upgrade Display",
  "icon": "Icon",
  "animation": "Animation",
  "moveInfo": "Move Info",
  "showMovesetFlyout": "Show Moveset Flyout",
  "showArenaFlyout": "Show Arena Flyout",
  "showTimeOfDayWidget": "Show Time of Day Widget",
  "timeOfDayAnimation": "Time of Day Animation",
  "bounce": "Bounce",
  "back": "Back",
  "spriteSet": "Sprite Set",
  "consistent": "Consistent",
  "mixedAnimated": "Mixed Animated",
  "fusionPaletteSwaps": "Fusion Palette Swaps",
  "playerGender": "Player Gender",
  "typeHints": "Type Hints",
  "masterVolume": "Master Volume",
  "bgmVolume": "BGM Volume",
  "seVolume": "SE Volume",
  "musicPreference": "Music Preference",
  "mixed": "Mixed",
  "gamepadPleasePlug": "Please Plug in a Gamepad or Press a Button",
  "delete": "Delete",
  "keyboardPleasePress": "Please Press a Key on Your Keyboard",
  "reset": "Reset",
  "requireReload": "Reload Required",
  "action": "Action",
  "pressToBind": "Press to Bind",
  "pressButton": "Press a Button...",
  "buttonUp": "Up",
  "buttonDown": "Down",
  "altButtonUp": "Up (Alt)",
  "buttonLeft": "Left",
  "buttonRight": "Right",
  "buttonAction": "Action",
  "buttonMenu": "Menu",
  "buttonSubmit": "Submit",
  "altButtonDown": "Down (Alt)",
  "altButtonLeft": "Left (Alt)",
  "altButtonRight": "Right (Alt)",
  "altButtonAction": "Action (Alt)",
  "buttonCancel": "Cancel",
  "altButtonCancel": "Cancel (Alt)",
  "altButtonMenu": "Menu (Alt)",
  "buttonStats": "Stats",
  "altButtonStats": "Stats (Alt)",
  "buttonCycleForm": "Cycle Form",
  "altButtonCycleForm": "Cycle Form (Alt)",
  "buttonCycleShiny": "Cycle Shiny",
  "altButtonCycleShiny": "Cycle Shiny (Alt)",
  "buttonCycleGender": "Cycle Gender",
  "altButtonCycleGender": "Cycle Gender (Alt)",
  "buttonCycleAbility": "Cycle Ability",
  "altButtonCycleAbility": "Cycle Ability (Alt)",
  "buttonCycleNature": "Cycle Nature",
  "altButtonCycleNature": "Cycle Nature (Alt)",
  "buttonCycleVariant": "Cycle Variant",
  "altButtonCycleVariant": "Cycle Variant (Alt)",
  "buttonSpeedUp": "Speed Up",
  "altButtonSpeedUp": "Speed Up (Alt)",
  "buttonSlowDown": "Slow Down",
  "altButtonSlowDown": "Slow Down (Alt)",
  "altButtonSubmit": "Submit (Alt)",
} as const;
