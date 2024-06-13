import { generateWAMessageFromContent } from  '@whiskeysockets/baileys' 
import uploadFile from  '../lib/uploadFile.js' 

let handler = async (m, { conn, text, participants, isOwner, isAdmin }) => {
    let users = participants.map(u => conn.decodeJid(u.id))
    let q = m.quoted ? m.quoted : m || m.text || m.sender
    let c = m.quoted ? await m.getQuotedObj() : m.msg || m.text || m.sender
    let messageType = m.quoted ? q.mtype :  'extendedTextMessage' 
    let messageContent = m.quoted ? c.message[q.mtype] ?? {} : { text:    || c }
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender; // تعريف المتغير who

    if (!(who in global.db.data.users)) throw `✳️ لم يتم العثور على المستخدم في قاعدة البيانات`; // فحص ما إذا كان المستخدم موجودًا في قاعدة البيانات

    let { name } = global.db.data.users[who]; // تعريف المتغير name من قاعدة البيانات
    let pp =  'https://telegra.ph/file/11d8f4ee53b8dd9fe80c6.jpg' 
    m.react( '📚' )
    global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid:  'status@broadcast' 
        },
        message: {
            contactMessage: {
                displayName: `${m.pushName}`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split( @ )[0]}:${m.sender.split( @ )[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        }
    }

    // التحقق من أن قيمة text ليست فارغة أو null
    let finalText = `╮━━⊱ 「 *معلومات البوت* 」⊱━━╭
│✫ -  .المحظورين
│✫ -  .المطور
│✫ -  .سرعه
│✫ -  .وقت التشغيل
│✫ -  .الدعم
│✫ -  .لسته
│✫ -  .معلومات
╯━━━━━━━━━━━━━━━━━╰`

    // التحقق مما إذا كان المحتوى المرسل هو صورة أو فيديو
    if (messageType ===  'imageMessage'  || messageType ===  'videoMessage' ) {
        let media = await q.download()
        let link = await uploadFile(media)

        await conn.sendMessage(
            m.chat,
            {
                [messageType ===  'imageMessage'  ?  'image'  :  'video' ]: { url:  'https://telegra.ph/file/11d8f4ee53b8dd9fe80c6.jpg'  },
                caption: finalText,
                contextInfo: {
                    mentionedJid: users,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid:  '120363287489532700@newsletter' ,
                        newsletterName: global.packname,
                        serverMessageId: -1
                    }
                }
            },
            { quoted: global.fcontact }
        )
    } else {
        await conn.sendMessage(
            m.chat,
            { 
                text: finalText,
                contextInfo: {
                    mentionedJid: users,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid:  '120363287489532700@newsletter' ,
                        newsletterName: global.packname,
                        serverMessageId: -1
                    }
                }
            },
            { quoted: global.fcontact }
        )
    }
}

handler.help = [ 'مخفي2' ]
handler.tags = [ 'group' ]
handler.command = /^(مخفي2|وهمي)$/i
handler.group = false
handler.admin = false
handler.botAdmin = false

export default handler
