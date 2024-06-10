import yts from 'yt-search';
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    if (!text) throw `✳️ ${mssg.example} *${usedPrefix + command}* اسم الشيء الذي تريد سماعه`;
    m.react('📀');
    
    let result = await yts(text);
    let ytres = result.videos;
    

    let listSections = [];
    for (let index in ytres) {
        let v = ytres[index];
        listSections.push({
            title: `${index}┃ ${v.title}`,
            rows: [
                {
                    header: '🎶 صوت',
                    title: "",
                    description: `▢ ⌚ *${mssg.duration}:* ${v.timestamp}\n▢ 👀 *${mssg.views}:* ${v.views}\n▢ 📌 *${mssg.title}* : ${v.title}\n▢ 📆 *${mssg.aploud}:* ${v.ago}\n`, 
                    id: `${usedPrefix}songs ${v.url}`
                },
                {
                    header: "🎥 فيديو",
                    title: "" ,
                    description: `▢ ⌚ *${mssg.duration}:* ${v.timestamp}\n▢ 👀 *${mssg.views}:* ${v.views}\n▢ 📌 *${mssg.title}* : ${v.title}\n▢ 📆 *${mssg.aploud}:* ${v.ago}\n`, 
                    id: `${usedPrefix}fgmp4 ${v.url}`
                }
            ]
        });
    }

    await conn.sendList(m.chat, '*•┈┈••●◆♪ 𝑴𝒊𝒓𝒛𝒂 𝑴𝒖𝒔𝒊𝒄 ♪◆●••┈┈•*', `\n 📀 النتيجة:\n *${text}*`, `نتائج البحث 🔍`, ytres[0].image, listSections, m);
};

handler.help = ['بحث']
handler.tags = ['dl']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista', 'بحث'] 
handler.disabled = false

export default handler
