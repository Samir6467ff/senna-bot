let handler = async (m, { conn, args, usedPrefix, command }) => {
  
const sections = [
{
name: 'single_select',
buttonParamsJson: {
title: 'القوائم',
sections: [
{
title: 'Copyright © 2024 dark man.',
highlight_label: 'بريميوم',
rows: [
{
  
header: 'بريميوم',
title: 'قسم اوامر بريميوم',
//description: '',
id: '.بريم'
}
]
},
{
rows: [
{
header: 'القسم الاول',
title: 'اوامر المجموعات',
id: 'id'
},
{
header: 'القسم الثاني',
title: 'اوامر التحويل',
id: '.id'
},
{
header: 'القسم الثالث',
title: 'اوامر الادوات',
id: '.id'
},
{
header: 'القسم الرابع',
title: 'اوامر الترفيه',
id: '.id'
},
{
header: 'القسم الخامس',
title: 'اوامر البحث',
id: '.id'
},
{
header: 'القسم السادس',
title: 'اوامر التحميل',
id: '.id'
},
{
header: 'القسم السابع',
title: 'اوامر الوجو',
id: '.id'
},
{
header: 'القسم الثامن',
title: 'اوامر التأثيرات الصوتية',
id: '.id'
},
{
header: 'القسم التاسع',
title: 'اوامر الخاصة بالاعضاء',
id: '.id'
},
{
header: 'القسم العاشر',
title: 'اوامر الذكاء الاصطناعي',
id: '.id'
}
]
},
  
]
}
},
{
name: "quick_reply",
buttonParamsJson: {
display_text:"بياناتي",
id: ".myinfo"
}
},
{
name: "cta_url",
buttonParamsJson: {
display_text:"قناتي",
url:"https://whatsapp.com/channel/0029VaI4a3JDZ4Lb0AHbdu47",
merchant_url:"https://whatsapp.com/channel/0029Va14a3JDZ4Lb0AHbdu47"
}
}
];

  
const listMessage = {
title: `Hello ${m.pushName}!.`,
text: "معلومات",
footer: "dark man",
buttons: sections
};
await conn.relayMessage(m.chat, listMessage);
};

handler.help = ['Buttons']
handler.tags = ['group']
handler.command = ['man']

export default handler;
