import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' || device !== 'web') {      
        var mirzaimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/11d8f4ee53b8dd9fe80c6.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: `test hi`.trim() },
            footer: { text: `© 𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕`.trim() },  
            header: {
                title: `test`,
                subtitle: `test`,
                hasMediaAttachment: true,
                imageMessage: mirzaimg.imageMessage,
            },
            nativeFlowMessage: {
  						buttons: [
                       {
                "name": "single_select",
                "buttonParamsJson": "{\"title\":\"القوائــــــم\",\"sections\":[{\"title\":\"title\",\"highlight_label\":\"label\",\"rows\":[{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"}]}]}"
                       },
                       {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"المطور\",\".owner\":\"massage\"}"
                        },
                        {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"قناتي\",\"url\":\"https://whatsapp.com/channel/0029VagsoU12kNFlfXWaPf0L\",\"merchant_url\"https://whatsapp.com/channel/0029VagsoU12kNFlfXWaPf0L\"\"}"
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
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id});

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', rcanal, m);      
    }    
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(تست)$/i;
export default handler;
