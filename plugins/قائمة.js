let handler = async (m, { conn, args, usedPrefix, command }) => {
  let sections = [
    {
      title: "𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕",
      rows: [
        {
          header: "معلومات البوت",
          title: ".المطور",
          description: "",
          rowId: "/معلومات"
        },
        {
          header: "قسم الاوامر",
          title: ".الاوامر",
          description: "",
          rowId: "/اوامر"
        }
      ]
    }
  ];

  let button = await conn.sendMessage(m.chat, {
    image: { url: "https://telegra.ph/file/4d94d11dd060c372ee632.jpg" },
    caption: "*قـائـمـة الاوامــر*\n\n🛡️ افتح القائمة بواسطة الزر\n⚡ لا تلعب كثير في القائمة",
    footer: "𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕",
    buttons: [
      {
        buttonId: "menu",
        buttonText: { displayText: "اضغط هنا" },
        type: 1
      }
    ],
    headerType: 4,
    sections
  }, {})
}

handler.help = ["لسته"]
handler.tags = ["main"]
handler.command = ["لسته"]
export default handler
