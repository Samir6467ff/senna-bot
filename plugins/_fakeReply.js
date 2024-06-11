import { generateWAMessageFromContent } from  '@whiskeysockets/baileys' 
import uploadFile from  '../lib/uploadFile.js' 

import fetch from 'node-fetch';
export async function before(m, { conn, text, participants }) {
   let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/11d8f4ee53b8dd9fe80c6.jpg');

  let nam = "✨  𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕  ✨"
  let users = participants.map(u => conn.decodeJid(u.id))
    let q = m.quoted ? m.quoted : m || m.text || m.sender
    let messageType = m.quoted ? q.mtype : 'extendedTextMessage'
    let messageContent = m.quoted ? q.message[q.mtype] ?? {} : { text: '' || c }
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender; // Defintion of who

    if (!(who in global.db.data.users)) throw `❌ User not found in database`

    let { name } = global.db.data.users[who]

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
   
  // Respuesta con enlace de WhatsApp
  global.rpl = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }, 
      externalAdReply: {
        mediaUrl: bgp,
        mediaType: 'VIDEO',
        description: 'support group',
        title: packname,
        body: 'grupo de soporte',
        thumbnailUrl: pp,
        sourceUrl: bgp
      }
    } 
  };
  
  // Respuesta con enlace de Canal de WhatsApp
  global.rcanal = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }, 
      externalAdReply: {
        mediaUrl: fgcanal,
        mediaType: 'VIDEO',
        description: 'canal del grupo',
        title: packname,
        body: 'تابع قناة البوت',
        thumbnailUrl: pp,
        sourceUrl: fgcanal
      }
    }, { quoted: global.fcontact }
  }
  
    // Forwarded
  global.fwc = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }
    }
  }

  // Respuesta con enlace de PayPal
  global.rpyp = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }, 
      externalAdReply: {
        mediaUrl: fgpyp,
        mediaType: 'VIDEO',
        description: 'Donate',
        title: 'PayPal',
        body: 'ayuda a mantener el bot activo',
        thumbnailUrl: pp,
        sourceUrl: fgpyp
      }
    }
  };

  // Respuesta con enlace de Instagram
  global.rpig = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }, 
      externalAdReply: {
        mediaUrl: fgig,
        mediaType: 'VIDEO',
        description: 'Sigueme por Instagram',
        title: 'Instagram',
        body: 'sigueme por Instagram',
        thumbnailUrl: pp,
        sourceUrl: fgig
      }
    }
  };

  // Respuesta con enlace de YouTube
  global.rpyt = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }, 
      externalAdReply: {
        showAdAttribution: true,
        mediaUrl: fgyt,
        mediaType: 'VIDEO',
        description: 'Suscribete: ' + fgyt,
        title: 'FG YouTube',
        body: 'aprende a crear tus propios bots',
        thumbnailUrl: pp,
        sourceUrl: fgyt
      }
    }
  }
  
  
  
}
