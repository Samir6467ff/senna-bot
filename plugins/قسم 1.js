let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = './src/fg_logo.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `
 *✫━⊱ قسم معلومات البوت ⊱━✫*
 ╮━━⊱ 「 *معلومات البوت* 」⊱━━╭
│✫ -  .المحظورين
│✫ -  .المطور
│✫ -  .سرعه
│✫ -  .وقت التشغيل
│✫ -  .الدعم
│✫ -  .لسته
│✫ -  .معلومات
╯━━━━━━━━━━━━━━━━━╰`
conn.sendButton2(m.chat, lkr, mssg.ig, pp, [
      ['⏍ القائمة', `${usedPrefix}تست`],
    ],m, rcanal)
m.react(done)
}
//handler.help = ['قرآن']
//handler.tags = ['islam']
handler.command = ['م1', 'quranmenu'] 

export default handler
