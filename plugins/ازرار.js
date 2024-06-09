import fs from 'fs';
import pkg from '@whiskeysockets/baileys';
import axios from 'axios'; // Import the axios package

const { generateWAMessageFromContent, proto } = pkg

var handler = async (m, { conn, usedPrefix }) => {

  // Get the image from the URL
  const mediaFile = await axios.get('https://telegra.ph/file/11d8f4ee53b8dd9fe80c6.jpg');

  // Save the image to a file
  await fs.promises.writeFile('image.jpg', mediaFile.data);

  // Read the image from the file
  const media = await fs.promises.readFile('image.jpg');

  const msg = generateWAMessageFromContent(m.chat, proto.Message.Message.create({
    viewOnceMessage: {
      message: {
        imageMessage: {
          jpegThumbnail: media
        }
      },
      footer: proto.Message.InteractiveMessage.Footer.create({
        text: "*𝐌𝐢𝐫𝐳𝐚 𝐁𝐨𝐭*"
      }),
      header: proto.Message.InteractiveMessage.Header.create({
        title: "*─═══════『 𝐌𝐢𝐫𝐳𝐚 𝐁𝐨𝐭 』═══════*\n*We stand with palastine🇵🇸*\n\n╭━━━━⊱『 *𝐌𝐢𝐫𝐳𝐚* 』⊱━━━━━╮\n> *👋🏻 مرحباَ:* *%name*\n> *👥 عدد المستخدمين:* *%totalreg*\n> *🟢 وقت النشاط:* %muptime\n╯━━━━━━━━━━━━━━━━━╰",
        subtitle: "text"
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
        buttons: [
          {
            "name": "single_select",
            "buttonParamsJson": "{\"title\":\"القوائم 📑\",\"sections\":[{\"title\":\"𝐌𝐢𝐫𝐳𝐚 𝐁𝐨𝐭\",\"highlight_label\":\"𝐌𝐢𝐫𝐳𝐚 𝐁𝐨𝐭\",\"rows\":[{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"}]}]}"
          },
          {
            "name": "quick_reply",
            "buttonParamsJson": "{\"display_text\":\"المطور\",\"id\":\".owner\"}"
          },
          {
             "name": "cta_url",
             "buttonParamsJson": "{\"display_text\":\"قناتنا\",\"url\":\"https://whatsapp.com/channel/0029VagsoU12kNFlfXWaPf0L\",\"merchant_url\":\"https://whatsapp.com/channel/0029VagsoU12kNFlfXWaPf0L\"}"
          },
       ],
      })
    }
  }), { contextInfo: { mentionedJid: [m.sender] }, quoted: m })
 
  await conn.relayMessage(msg.key.remoteJid, msg.message, media, { messageId: msg.key.id })

}
handler.command = /^(بوت)$/i

export default handler
