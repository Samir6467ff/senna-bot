let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    
    let listSections = [];
    for {
        let v = ytres[index];
        listSections.push({
            title: `${index}┃ ${v.title}`,
            rows: [
                {
                    header: '🎶 MP3',
                    title: "",
                    description: `▢ ⌚ *${mssg.duration}:* ${v.timestamp}\n▢ 👀 *${mssg.views}:* ${v.views}\n▢ 📌 *${mssg.title}* : ${v.title}\n▢ 📆 *${mssg.aploud}:* ${v.ago}\n`, 
                    id: `${usedPrefix}fgmp3 ${v.url}`
                },
                {
                    header: "🎥 MP4",
                    title: "" ,
                    description: `▢ ⌚ *${mssg.duration}:* ${v.timestamp}\n▢ 👀 *${mssg.views}:* ${v.views}\n▢ 📌 *${mssg.title}* : ${v.title}\n▢ 📆 *${mssg.aploud}:* ${v.ago}\n`, 
                    id: `${usedPrefix}fgmp4 ${v.url}`
                }
            ]
        });
    }

    await conn.sendList(m.chat, '  ≡ *FG MUSIC*🔎', `\n 📀 Resultados de:\n *${text}*`, `Click Aqui`, ytres[0].image, listSections, m);
};

handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 
handler.disabled = false

export default handler
