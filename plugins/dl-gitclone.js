
import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `${mssg.noLink('GitHub')}\n\n📌 ${mssg.example} : ${usedPrefix + command} ادخل الرابط`
    if (!regex.test(args[0])) throw `⚠️ ${mssg.noLink('GitHub')}`
    let [_, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
  
    m.react(rwait)
    conn.sendFile(m.chat, url, filename, null, m)
    m.react(done)
}
handler.help = ['جيثهب <رابط>']
handler.tags = ['dl']
handler.command = ['جيثهب'] 
handler.diamond = false

export default handler
