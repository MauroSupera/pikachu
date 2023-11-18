const infodono = (prefix, numerodn, NomeDoBot, sender) => {

// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.

return`
🎊⊛━━━━━ • 🌟 • ━━━━━⊛🎊
     INFORMAÇÕES DO DONO
♫ ♬ ━━━━━━ • 🔮 • ━━━━━━ ♫ ♬

TREINADOR: @${sender.split("@")[0]}
MEU DONO: wa.me/${numerodn}
🎗️━━━━━━ • 🌟 • ━━━━━━🎗️



🎊⊛━━━━━ • 🌟 • ━━━━━⊛🎊
    INFORMAÇÕES DO BOT
♫ ♬ ━━━━━━ • 🔮 • ━━━━━━ ♫ ♬
PREFIXO: ⩺ ${prefix}
 NOME: ⩺ ${NomeDoBot} 
🎗️━━━━━━ • 🌟 • ━━━━━━🎗️
`
}

exports.infodono = infodono