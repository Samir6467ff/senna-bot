let handler = async function (m, { conn, text, usedPrefix }) {
    let pp = './src/fg_logo.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `
╮━━⊱ 「 *معلومات البوت* 」⊱━━╭
│✫ -  .المحظورين
│✫ -  .المطور
│✫ -  .سرعه
│✫ -  .وقت التشغيل
│✫ -  .الدعم
│✫ -  .لسته
│✫ -  .معلومات
╯━━━━━━━━━━━━━━━━━╰`
await conn.sendButton2(m.chat, lkr, mssg.ig, pp, rcanal, [
    ['القائمة', `${usedPrefix}تست`],
  ], null, [['قناة البوت', `${fgcanal}`]], m,)
m.react(done)
}
//handler.help = ['قرآن']
//handler.tags = ['islam']
handler.command = ['م1', 'quranmenu'] 

export default handler
