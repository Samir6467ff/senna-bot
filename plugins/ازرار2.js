import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg

var handler = async (m, { conn, usedPrefix }) => {

let imagePath = '/src/fg_logo.jpg'; // مسار الصورة

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: "𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕"
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: "𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕"
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: "𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕",
 subtitle: "test",
 hasMediaAttachment: true, // تم تعديل هنا لتفعيل عرض الصورة
 mediaUrl: imagePath // تم تعديل هنا لتحديد مسار الصورة
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [
 {
 "name": "single_select",
 "buttonParamsJson": "{\"title\":\"القوائم 📑\",\"sections\":[{\"title\":\"𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕\",\"highlight_label\":\"𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕\",\"rows\":[{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"}]}]}"
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
 })
 }
}
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
handler.command = /^(ميرا)$/i

export default handler
