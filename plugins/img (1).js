import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    m.react('📃')
    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/11d8f4ee53b8dd9fe80c6.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: `مرحباً! ${m.pushName}`.trim() },
            footer: { text: `© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ʜᴀᴍᴢᴀ`.trim() },  
            header: {
                title: ``,
                subtitle: `test`,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
  						buttons: [
                       {
                "name": "single_select",
                "buttonParamsJson": "{\"title\":\"القوائـــــــــم📑\",\"sections\":[{\"title\":\"𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕\",\"highlight_label\":\"𝙼𝚛 𝙷𝚊𝚖𝚣𝚊\",\"rows\":[{\"header\":\"القسم الأول\",\"title\":\"معلومات المطور\",\"id\":\".info\"},{\"header\":\"القسم الثاني\",\"title\":\"title\",\"id\":\"id\"},{\"header\":\"القسم الثالث\",\"title\":\"title\",\"id\":\"id\"},{\"header\":\"القسم الرابع\",\"title\":\"title\",\"id\":\"id\"},{\"header\":\"القسم الخامس\",\"title\":\"title\",\"id\":\"id\"},{\"header\":\"القسم السادس\",\"title\":\"title\",\"id\":\"id\"},{\"header\":\"القسم السابع\",\"title\":\"title\",\"id\":\"id\"}]}]}"
                       },
                       {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"المطـــور\",\"id\":\".owner\"}"
                        },
                        {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"قنــاتــي\",\"url\":\"https://whatsapp.com/channel/0029VagsoU12kNFlfXWaPf0L\",\"merchant_url\":\"\"}"
                        },
  			  		],
                messageParamsJson: ''
            }
        };        
        
        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        conn.relayMessage(m.chat, msg.message, rcanal, null, { messageId: msg.key.id});
        
    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
//handler.help = ['imgboton'];
//handler.tags = ['For Test'];
handler.command = /^(تست)$/i;
export default handler;
