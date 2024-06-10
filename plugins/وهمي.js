import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
import uploadFile from '../lib/uploadFile.js'

export default async (m, { conn, text, participants, isOwner, isAdmin }) => {
    const users = participants.map(u => conn.decodeJid(u.id))
    const q = m.quoted ? m.quoted : m || m.text || m.sender
    const messageType = m.quoted ? q.mtype : 'extendedTextMessage'
    const messageContent = m.quoted ? q.message[q.mtype] ?? {} : { text: '' || c }
    const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender; // Defintion of who

    if (!(who in global.db.data.users)) throw `❌ User not found in database`

    const { name } = global.db.data.users[who]

    global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: 'status@broadcast'
        },
        message: {
            contactMessage: {
                displayName: `${name}`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        }
    }

    const finalText = text || q.text

    if (messageType === 'imageMessage' || messageType === 'videoMessage') {
        const media = await q.download()
        const link = await uploadFile(media)

        await conn.sendMessage(
            m.chat,
            {
                [messageType === 'imageMessage' ? 'image' : 'video']: { url: link },
                caption: finalText,
                contextInfo: {
                    mentionedJid: users,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363272493503323@newsletter',
                        newsletterName: global.author,
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
                        newsletterJid: '120363272493503323@newsletter',
                        newsletterName: global.author,
                        serverMessageId: -1
                    }
                }
            },
            { quoted: global.fcontact }
        )
    }
}
