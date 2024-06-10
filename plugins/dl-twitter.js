
import fg from 'api-dylux'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `📌 ${mssg.example} :\n*${usedPrefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`
          m.react(rwait)
          
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
┌─⊷ *TWITTER DL*
▢ *${mssg.desc}:* ${desc}
└───────────`
conn.sendFile(m.chat, HD, 'twitter.mp4', te, m)
m.react(done)
} catch (e) {
    m.reply(`✳️ ${mssg.error}`)
  } 
  
}
handler.help = ['تويتر <رابط>']
handler.tags = ['dl']
handler.command = ['twitter', 'تويتر', 'x']
handler.diamond = false

export default handler
