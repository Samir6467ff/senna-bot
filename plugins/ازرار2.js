import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg

var handler = async (m, { conn, usedPrefix }) => {
 
let users = await conn.fetchBlocklist()

let prep = generateWAMessageFromContent(m.chat, {
  image: await (await require('node-fetch')('https://telegra.ph/file/11d8f4ee53b8dd9fe80c6.jpg')).buffer(),
  caption: `*━⊱│✫ -『 𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕 』- ✫│⊱━*\n 
        *𝑾𝒆 𝒔𝒕𝒂𝒏𝒅 𝒘𝒊𝒕𝒉 𝒑𝒂𝒍𝒂𝒔𝒕𝒊𝒏𝒆🇵🇸*
 ╭━━━━⊱『 *𝑴𝒊𝒓𝒛𝒂* 』⊱━━━━━╮
> *👋🏻 مرحباَ:* ${m.pushName}\n> *👥 عدد المستخدمين:* ${users.length}\n> *🟢 وقت النشاط:* 
╰━━━━━━━━━━━━━━━━━╰`,
  footer: "𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕"
}, {})

let msg = {
  key: {
    remoteJid: m.chat,
    fromMe: true,
    id: '𝖑00/#{Math.floor(Math.random() * 1000000000000000)}.png'
  }
}

let content = prep.message.imageMessage
content.contextInfo = {
   forwardingScore: 2,
   isForwarded: true,
   externalAdReply: {
      title: "ᴹᴼᴿᵀᵞ",
      body: "حمل الان!",
      thumbnail: await (await require("node-fetch")("https://telegra.ph/file/11d8f4ee53b8dd9fe80c6.jpg")).buffer(),
      mediaType: 2
   }
}

Object.assign(msg, content)
msg["message"] = {
  "viewOnceMessage": {
    "message": {
        "imageMessage": content
    }
  }
}

await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
handler.command = /^(ميرا)$/i

export default handler
