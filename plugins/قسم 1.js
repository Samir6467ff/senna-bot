let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = './src/quran.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `╮━━⊱ 「 *معلومات البوت* 」⊱━━╭
│✫ -  .المحظورين
│✫ -  .المطور
│✫ -  .سرعه
│✫ -  .وقت التشغيل
│✫ -  .الدعم
│✫ -  .لسته
│✫ -  .معلومات
╯━━━━━━━━━━━━━━━━━╰`
await conn.sendButton2(m.chat, lkr, mssg.ig, pp, [
    ['القائمة', `${usedPrefix}تست`],
  ], null, rpig, [['قناة البوت', `${fgcanal}`]], m,)
m.react(done)
}
//handler.help = ['قرآن']
//handler.tags = ['islam']
handler.command = ['م1', 'quranmenu'] 

export default handler
