/* Copyright (C) 2021 xYAZUWA
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Alora - xYAZUWA


█▀▀█ █░░ █▀▀█ █▀▀█ █▀▀█   █▀▀▄ █▀▀█ ▀▀█▀▀
█▄▄█ █░░ █░░█ █▄▄▀ █▄▄█   █▀▀▄ █░░█ ░░█░░
▀░░▀ ▀▀▀ ▀▀▀▀ ▀░▀▀ ▀░░▀   ▀▀▀░ ▀▀▀▀ ░░▀░░
*/





const Asena = require('../events');
const {
    MessageType,
    GroupSettingChange,
    Mimetype,
    MessageOptions
} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
const hrs = new Date().getHours({ timeZone: 'Asia/Colombo' })


let tk = Config.WORKTYPE == 'public' ? false: true


Asena.addCommand({ pattern: 'menu', fromMe: tk, desc: 'Gives The Button Menu'
}, (async (message, match) => {
        



        
//list message


   const rows = [
 {title: '⚒️🌹 𝖠𝖫𝖮𝖱𝖠 𝖯𝖱𝖮 𝖳𝖮𝖮𝖫𝖲🌹⚒️', description: `▻\n\n

⚒️Usage: *.mp4enhance*
🌹Desc: 🇬🇧 Enhance video’s quality.

⚒️Usage: *.interp*
🌹Desc: 🇬🇧 Increases the FPS of the video.

⚒️Usage: *.mp4slowmo*
🌹Desc: 🇬🇧 Applies true-slowmo to non-slow motion videos.

⚒️Usage: *.x4mp4*
🌹Desc: 🇬🇧 Reduce video’s quality by 75%.

⚒️Usage: *.x2mp4*
🌹Desc: 🇬🇧 Reduce video’s quality by 50%.

⚒️Usage: *.gif*
🌹Desc: 🇬🇧 Converts video to gif.

💻⚒️Usage: *.agif*
🌹Desc: 🇬🇧 Converts video to voiced gif.

⚒️Usage: *.mp4blur*
🌹Desc: 🇬🇧 Blurs the background of the video.

⚒️Usage: *.mp4stab*
🌹Desc: 🇬🇧 Decreases the vibration of the video.

⚒️Usage: *.mp4rainbow*
🌹Desc: 🇬🇧 Applies a rainbow effect to video.

⚒️Usage: *.mp4color*
🌹Desc: 🇬🇧 Makes the colors of the video more vivid and beautiful.

⚒️Usage: *.mp4art*
🌹Desc: 🇬🇧 Applies a art effect to the video.

⚒️Usage: *.mp4negative*
🌹Desc: 🇬🇧 Applies a negative color filter to the video.

⚒️Usage: *.mp4vintage*
🌹Desc: 🇬🇧 Applies a nostalgic effect to video.

⚒️Usage: *.mp4bw*
🌹Desc: 🇬🇧 Applies a monochrome effect to video.

⚒️Usage: *.mp4reverse*
🌹Desc: 🇬🇧 Plays the video in reverse.

⚒️Usage: *.mp4edge*
🌹Desc: 🇬🇧 Applies a edge effect to the video.

⚒️Usage: *.mp4image*
🌹Desc: 🇬🇧 Converts photo to 5 sec video.

⚒️Usage: *.spectrum*
🌹Desc: 🇬🇧 Converts the spectrum of sound into video.

⚒️Usage: *.waves*
🌹Desc: 🇬🇧 Converts the wave range of sound to video.

⚒️Usage: *.frequency*
🌹Desc: 🇬🇧 Converts the frequency range of sound to video.

⚒️Usage: *.avec*
🌹Desc: 🇬🇧 Converts the histogram of sound to video.

⚒️Usage: *.volumeaudio*
🌹Desc:  Converts the decibel value of the sound into video.

⚒️Usage: *.cqtaudio*
🌹Desc:  Converts the CQT value of audio to video.

⚒️Usage: *.mp3eq*
🌹Desc:  Adjusts the sound to a crystal clear level.

⚒️Usage: *.mp3crusher*
🌹Desc:  Distorts the sound, makes ridiculous.

⚒️Usage: *.mp3reverse*
🌹Desc:  Plays the sound in reverse.

⚒️Usage: *.mp3pitch*
🌹Desc:  Makes the sound thinner and faster.

⚒️Usage *.mp3low*
🌹Desc:  Makes the sound deep and slower.

⚒️Usage: *.x2mp3*
🌹Desc:  Makes the sound twice as fast.

⚒️Usage: *.mp3volume*
🌹Desc:  Increase sound level so much.

⚒️Usage: *.bwimage*
🌹Desc:  Applies a monochrome effect to image.

⚒️Usage: *.vintageimage*
🌹Desc:  Applies a vinatge effect to video.

⚒️Usage: *.edgeimage*
🌹Desc: Applies a edge effect to the photo.

⚒️Usage: *.enhanceimage*
🌹Desc: Makes the photo clearer.

⚒️Usage: *.blurimage*
🌹Desc :  Blurs the background of the photo.

⚒️Usage: *.grenimage*
🌹Desc:  Applies grain effect to the photo.

⚒️Usage: *.negativeimage*
🌹Desc:  Applies a negative color filter to the photo.

⚒️Usage: *.rainbowimage*
🌹Desc: Applies rainbow effect to the photo.

⚒️Usage: *.colorimage*
🌹Desc: It makes the colors of the photo more vivid and attractive.

⚒️Usage: *.artimage*
🌹Desc:  Applies a art effect to the photo 


` , rowId:"rowId1"},
 


{title: '🌸👸 𝖫𝖮𝖦𝖮 𝖬𝖠𝖪𝖤𝖱 (OLD)🌸👸', description: `▻\n\n

❮❮  *🔰Main Command - .v2maker*  ❯❯

👸Usage: *.pemoji*
🌸Desc: ඉමොජි රූපයට පරිවර්තනය කරන්න.

👸Usage: *.pornhub*
🌸Desc: එය සැපය ඇති text කළු පැහැති පෙනුම රූපයක් යවයි.
ඔබ විසින් * මගින් වෙන් කර ඇති ශීර්ෂය සහ උපසිරැසි අනුපිළිවෙලට ඇතුළත් කළ යුතුය!.

👸Usage: *.sandwriting*
🌸Desc: එය සපයා ඇති පෙළෙහි වැලි රූපයක් යවයි.

👸Usage: *.blackpink*
🌸Desc: එය සපයා ඇති පෙළෙහි කළු රෝස රූපයක් යවයි.

👸Usage: *.blood*
🌸Desc: එය සපයා ඇති පෙළෙහි ලේ රූපයක් යවයි.

👸Usage: *.snow*
🌸Desc: එය සපයා ඇති පෙළෙහි හිම රූපයක් යවයි.

👸Usage: *.cloud*
🌸Desc: එය සපයා ඇති පෙළෙහි අහස රූපයක් යවයි.

👸Usage: *.sparkling*
🌸Desc: පාඨය දීප්තිමත් තේමා රූපයක් බවට පරිවර්තනය කරයි
ඔබ විසිනු මගින් වෙන් කර ඇති ශීර්ෂය සහ උපමාතෘකාව අනුපිළිවෙලට ඇතුළත් කළ යුතුය!

👸Usage: *.watercolour*
🌸Desc: පාඨය ජල වර්ණ තේමා රූපයක් බවට පරිවර්තනය කරයි.

👸Usage: *.gaming*
🌸Desc: නින්ජා තේමා ලාංඡනය සඳහා ශීර්ෂ පාඨය ලෙස පෙළ ඇතුළු කරයි.

👸Usage: *.neonlight*
🌸Desc: පෙළ neonlight තේමා රූපයක් බවට පරිවර්තනය කරයි.

👸Usage: *.3dtext*
🌸Desc: සපයා ඇති පෙළ ත්‍රිමාණ මෝස්තර රූපයක් බවට පරිවර්තනය කරයි.

👸Usage: *.glitch*
🌸Desc:එය ඔබට glitch සකසයි.

👸Usage: *.wood*
🌸Desc:එය ඔබට දැව ආකාරයේ logo සකසයි.

👸Usage: *.8bit*
🌸Desc:එය ඔබට bit ආකාරයේ logo සකසයි.

👸Usage: *.shadow*
🌸Desc:එය ඔබට සෙවනැල්ල ආකාරයේ logo සකසයි.

👸Usage: *.underwater*
🌸Desc:එය ඔබට දිය යට ආකාරයේ logo සකසයි.

👸Usage: *.flower*
🌸Desc:එය ඔබට දිය යට logo සකසයි.

👸Usage: *.burn*
🌸Desc:එය ඔබට පුළුස්සා දමන logo සකසයි.

👸Usage: *.candy*
🌸Desc:එය ඔබට රසකැවිලි logo සකසයි.

👸Usage: *.harrypotter*
🌸Desc:එය ඔබට හැරී පොටර් logo සකසයි.

👸Usage: *.grass*
🌸Desc:එය ඔබට තණකොළ logo සකසයි.

👸Usage: *.candlemug*
🌸Desc:එය ඔබට candlemug logo සකසයි.

👸Usage: *.romance*
🌸Desc:එය ඔබට ආදර logo සකසයි.

👸Usage: *.lovemsg*
🌸Desc:එය ඔබට ආදරයකතා logo සකසයි.

*Copyright © 2021 | ALORA V2🎻*
` , rowId:"rowid2"},


{title: '🌹📝𝖦𝖱𝖮𝖴𝖯 𝖲𝖤𝖳𝖳𝖨𝖭𝖦𝖲📝🌹', description: `▻▻▻▻▻▻▻▻\n\n

🧰 *𝖢𝗈𝗆𝗆𝖺𝗇𝖽:*  .ban
🌹 *𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝖪𝗂𝖼𝗄𝗌 𝗆𝖾𝗆𝖻𝖾𝗋 𝖿𝗋𝗈𝗆 𝗍𝗁𝖾 𝗀𝗋𝗈𝗎𝗉. (𝗋𝖾𝗉𝗅𝗒 𝗍𝗁𝖾 𝗆𝖾𝗌𝖺𝖺𝗀𝖾 𝗈𝗋 𝗍𝖺𝗀 𝗁𝗂𝗆/𝗁𝖾𝗋)

🧰 *𝖢𝗈𝗆𝗆𝖺𝗇𝖽:* .𝖺𝖽𝖽
🌹 𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:  𝖳𝗁𝗂𝗌 𝖠𝖽𝖽𝗌 𝖬𝖾𝗆𝖻𝖾𝗋 𝗍𝗈 𝗀𝗋𝗈𝗎𝗉.
(𝖾𝗑𝖺𝗆𝗉𝗅𝖾 :  .𝖺𝖽𝖽 94712345689)

*🧰𝖢𝗈𝗆𝗆𝖺𝗆𝖽:* .𝗉𝗋𝗈𝗆𝗈𝗍𝖾
*🌹𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝖬𝖾𝗇𝗍𝗂𝗈𝗇𝖾𝖽 𝖬𝖾𝗆𝖻𝖾𝗋 𝗐𝗂𝗅𝗅 𝖻𝖾 𝖺𝗇 𝖺𝖽𝗆𝗂𝗇. (𝗋𝖾𝗉𝗅𝗒 𝗍𝗈 𝗆𝖾𝗌𝗌𝖺𝗀𝖾)

*🧰𝖢𝗈𝗆𝗆𝖺𝗆𝖽:* .demote
*🌹Description:*  dismisses as admin(re𝗉𝗅𝗒 𝗍𝗈 𝗍𝖺𝗋𝗀𝖾𝗍𝗌 𝗆𝖾𝗌𝗌𝖺𝗀𝖾(

*🧰𝖢𝗈𝗆𝗆𝖺𝗆𝖽:* .𝗆𝗎𝗍𝖾
*🌹Description:*  𝖲𝗂𝗅𝖾𝗇𝖼𝖾 𝗍𝗁𝖾 𝗀𝗋𝗈𝗎𝗉 (𝖮𝗇𝗅𝗒 𝖺𝖽𝗆𝗂𝗇𝗌 𝖼𝖺𝗇 𝗆𝖾𝗌𝗌𝖺𝗀𝖾)

*🧰𝖢𝗈𝗆𝗆𝖺𝗆𝖽:* .𝗎𝗇𝗆𝗎𝗍𝖾
*🌹Description:* 𝖠𝗅𝗅𝗈𝗐𝗌 𝖬𝖾𝗆𝖻𝖾𝗋𝖽 𝗍𝗈 𝗌𝖾𝗇𝖽 𝗆𝖾𝗌𝗌𝖺𝗀𝖾𝗌

`, rowId:"rowid3"},

 
{title: '📱🔅 𝖮𝖶𝖭𝖤𝖱 𝖮𝖭𝖫𝖸,𝖲𝖴𝖣𝖮🔅📱', description: `▻\n\n

📱 *𝖢𝗈𝗆𝗆𝖺𝗇𝖽:*  .ban
🔅 *𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝖪𝗂𝖼𝗄𝗌 𝗆𝖾𝗆𝖻𝖾𝗋 𝖿𝗋𝗈𝗆 𝗍𝗁𝖾 𝗀𝗋𝗈𝗎𝗉. (𝗋𝖾𝗉𝗅𝗒 𝗍𝗁𝖾 𝗆𝖾𝗌𝖺𝖺𝗀𝖾 𝗈𝗋 𝗍𝖺𝗀 𝗁𝗂𝗆/𝗁𝖾𝗋)

📱 *𝖢𝗈𝗆𝗆𝖺𝗇𝖽:* .𝖺𝖽𝖽
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:*  𝖳𝗁𝗂𝗌 𝖠𝖽𝖽𝗌 𝖬𝖾𝗆𝖻𝖾𝗋 𝗍𝗈 𝗀𝗋𝗈𝗎𝗉.
(𝖾𝗑𝖺𝗆𝗉𝗅𝖾 :  .𝖺𝖽𝖽 94712345689)

*📱𝖢𝗈𝗆𝗆𝖺𝗆𝖽:* .𝗉𝗋𝗈𝗆𝗈𝗍𝖾
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝖬𝖾𝗇𝗍𝗂𝗈𝗇𝖾𝖽 𝖬𝖾𝗆𝖻𝖾𝗋 𝗐𝗂𝗅𝗅 𝖻𝖾 𝖺𝗇 𝖺𝖽𝗆𝗂𝗇. (𝗋𝖾𝗉𝗅𝗒 𝗍𝗈 𝗆𝖾𝗌𝗌𝖺𝗀𝖾)

*📱𝖢𝗈𝗆𝗆𝖺𝗆𝖽:* .demote
*🔅Description:*  dismisses as admin(re𝗉𝗅𝗒 𝗍𝗈 𝗍𝖺𝗋𝗀𝖾𝗍𝗌 𝗆𝖾𝗌𝗌𝖺𝗀𝖾(

*📱𝖢𝗈𝗆𝗆𝖺𝗆𝖽:* .𝗆𝗎𝗍𝖾
*🔅Description:*  𝖲𝗂𝗅𝖾𝗇𝖼𝖾 𝗍𝗁𝖾 𝗀𝗋𝗈𝗎𝗉 (𝖮𝗇𝗅𝗒 𝖺𝖽𝗆𝗂𝗇𝗌 𝖼𝖺𝗇 𝗆𝖾𝗌𝗌𝖺𝗀𝖾)

*📱𝖢𝗈𝗆𝗆𝖺𝗆𝖽:* .𝗎𝗇𝗆𝗎𝗍𝖾
*🔅Description:* 𝖠𝗅𝗅𝗈𝗐𝗌 𝖬𝖾𝗆𝖻𝖾𝗋𝗌 𝗍𝗈 𝗌𝖾𝗇𝖽 𝗆𝖾𝗌𝗌𝖺𝗀𝖾𝗌

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝗉𝗅𝗎𝗀𝗂𝗇
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝗌𝗁𝗈𝗐𝗌 𝗍𝗁𝖾 𝗉𝗅𝗎𝗀𝗂𝗇𝗌 𝗍𝗁𝖺𝗍 𝗂𝗇𝗌𝗍𝖺𝗅𝗅𝖾𝖽.

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝗂𝗇𝗏𝗂𝗍𝖾
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝗉𝗋𝗈𝗏𝗂𝖽𝖾𝗌 𝗍𝗁𝖾 𝖼𝗁𝖺𝗍𝗌 𝗂𝗇𝗏𝗂𝗍𝖾 𝗅𝗂𝗇𝗄

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝗐𝖾𝗅𝖼𝗈𝗆𝖾
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝗌𝖾𝗍𝗌 𝗍𝗁𝖾 𝗐𝖾𝗅𝖼𝗈𝗆𝖾 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 (𝗎𝗌𝖾 # 𝖿𝗈𝗋 𝗎𝗇𝖽𝖾𝗋𝗌𝖼𝗈𝗋𝖾𝗌)

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝗀𝗈𝗈𝖽𝖻𝗒𝖾
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝗌𝖾𝗍𝗌 𝗀𝗈𝗈𝖽𝖻𝗒𝖾 𝗆𝖾𝗌𝗌𝖺𝗀𝖾

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝗋𝖾𝗌𝗍𝖺𝗋𝗍
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝖱𝖾𝗌𝗍𝖺𝗋𝗍𝗌 𝗍𝗁𝖾 𝖻𝗈𝗍

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝗌𝗁𝗎𝗍𝖽𝗈𝗐𝗇 
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝗌𝗁𝗎𝗍𝖽𝗈𝗐𝗇𝗌 𝖻𝗈𝗍

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝖽𝗒𝗇𝗈
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝖢𝗁𝖾𝖼𝗄𝗌 𝖧𝖾𝗋𝗈𝗄𝗎 𝖽𝗒𝗇𝗈 𝗎𝗌𝖺𝗀𝖾

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝗌𝖾𝗍𝗏𝖺𝗋
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝖢𝗋𝖾𝖺𝗍𝖾𝗌 𝖧𝖾𝗋𝗈𝗄𝗎 𝖼𝗈𝗇𝖿𝗂𝗀 𝗏𝖺𝗋

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:*  .𝖽𝖾𝗅𝗏𝖺𝗋
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:*  𝖣𝖾𝗅𝖾𝗍𝖾𝗌 𝗁𝖾𝗋𝗈𝗄𝗎 𝖼𝗈𝗇𝖿𝗂𝗀 𝗏𝖺𝗋

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝗀𝖾𝗍𝗏𝖺𝗋
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝖦𝗂𝗏𝖾𝗌 𝗍𝗁𝖾 𝖢𝗈𝗇𝖿𝗂𝗀 𝖵𝖺𝗋 𝗅𝗂𝗌𝗍

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝗉𝗉 
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝖳𝗁𝖾 𝗉𝗁𝗈𝗍𝗈 𝗍𝗁𝖺𝗍 𝗒𝗈𝗎 𝗋𝖾𝗉𝗅𝗒 𝗌𝖾𝗍𝗌 𝖺𝗌 𝗒𝗈𝗎𝗋 𝖽𝗉

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:* .𝖻𝗅𝗈𝖼𝗄
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:*  𝖡𝗅𝗈𝖼𝗄𝗌 𝗍𝗁𝖾 𝗎𝗌𝖾𝗋

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:*  .𝗎𝗇𝖻𝗅𝗈𝖼𝗄
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:* 𝖴𝗇𝖻𝗅𝗈𝗄𝗌 𝗍𝗁𝖾 𝗎𝗌𝖾𝗋

*📱C𝗈𝗆𝗆𝖺𝗇𝖽:*  .𝗃𝗂𝖽 
*🔅𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇:*  𝖦𝗂𝗏𝖾𝗌 𝗍𝗁𝖾 𝖼𝗁𝖺𝗍𝗌 𝗃𝗂𝖽
` , rowId:"rowid4"},


{title: `👸🧭NEW LOGO LIST🧭👸`, description: ` ▻\n\n
🔰❮Will be added soon...❯
✅❮Check the Main Command = .a2maker ❯

` , rowId:"rowid5"},

{title: '┭─⛦FF LOGO MAKER⛦┱─', description: `▻\n\n

𝔹❯╲╲╲╲╲┏━━━┓╱╱╱╱╱
𝕐❯╲┏━━━┻━━━┻━━━┓╱❮⛦⛦𝔽
𝔸❯╲┃╭━╮┏━━━┓╭━╮┃╱❮⛦⛦𝔽
𝕃❯╱┃┃╳┃┣◯--◯┫┃╳┃┃╲❮⛦⛦𝕃
𝕆❯╱┃╰━╯┣━━━┫╰━╯┃╲❮⛦⛦𝕆
ℝ❯╱┃┈▊▊▊▊┈▂▃▅▇┈┃╲❮⛦⛦𝔾
𝔸❯╱┗━━━━━━━━━━━┛╲❮⛦⛦𝕆
┌────────────────────┐
 ❗ᴼᴿᴵᴳᴵᴺᴬᴸ ᶜᴼᴹᴹᴬᴺᴰ .ffpack
└────────────────────┘
╭────────────────◅
│⛦⛦⛦⛦⛦⛦⛦⛦⛦⛦⛦⛦⛦
│🅕🅕 🅛🅞🅖🅞 🅟🅐🅒🅚
│◅►◅►◅►◅►◅►◅►◅►◅►
│
├◅ .about [ʙᴏᴛ ᴅᴇᴠᴇʟᴏᴘᴇʀ]
├◅ .ff02 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff03 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff04 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff05 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff06 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff07 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff08 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff09 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff10 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff11 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff12 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff13 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff14 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff15 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff16 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff17 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff18 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff19 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff20 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff21 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff22 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff23 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff24 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff25 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff26 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff27 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff28 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff29 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff30 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff31 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff32 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff33 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff34 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff35 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff36 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff37 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff38 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff39 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff40 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff41 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff42 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff43 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff44 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff45 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff46 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff47 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff48 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff49 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
├◅ .ff50 [ᴍᴀᴋᴇꜱ ꜰꜰ ʟᴏɢᴏ]
│
│🟥🟨🟩🟦🟪🟧
│👸ᴛʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ᴜꜱɪɴɢ
│ᴀʟᴏʀᴀ ʙᴏᴛ.💚
│
│❗ʙᴇ ᴘᴀᴛɪᴇɴᴄᴇ ᴄᴜᴢ ᴛʜɪꜱ ᴀᴘɪ
│ ɪꜱ ᴍᴀᴅᴇ ʙʏ ʏᴀꜱɪɴᴅᴜ🥴──✅
╰─────────────────────◅
👸ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʟᴏʀᴀ ʙᴏᴛ──💚
` , rowId:"rowid6"},

{title: '📸🛠ATTP MAKER LIST🛠📸', description: `▻\n\n

🄰❯────█─▄▀█──█▀▄─█────❮🧭
🄻❯───▐▌──────────▐▌───❮🅐
🄾❯───█▌▀▄──▄▄──▄▀▐█───❮🅣
🅁❯──▐██──▀▀──▀▀──██▌──❮🅣
🄰❯─▄████▄──▐▌──▄████▄─❮🅟

┏━━━━━━━━━━━━━━━━━┓
❗ᴼᴿᴳᴵᴺᴬᴸ ᶜᴼᴹᴹᴬᴺᴰ .a2ttp
┗━━━━━━━━━━━━━━━━━┛
╭───────────────────◀
│
├──ᴀᴛᴛᴘ ᴘᴀᴄᴋ ʙʏ ᴀʟᴏʀᴀ✅
│
├▷ .01attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳ 
│   ❴ .attp alora ❵
│
├▷ .02attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳ 
│
├▷ .03attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .04attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .05attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .06attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .07attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .08attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .09attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .10attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .11attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .12attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .13attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .14attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .15attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .16attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .17attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .18attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .19attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .20attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .21attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .22attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .23attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .24attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .25attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .26attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .27attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .28attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .29attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .30attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .31attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .32attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .33attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .34attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .35attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .36attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .37attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .38attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .39attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
├▷ .40attp  ❲ ƈɾҽαƚҽʂ αƚƚρ ❳
│
│👸αƚƚρ ραƈƙ Ⴆყ αʅσɾα🤗
╰───────────────────◀

` , rowId:"rowid7"},

{title: '📸👸ALORA LOGO PACK 2👸📸', description: `▻\n\n

‎╮╰╮╮▕╲╰╮╭╯╱▏╭╭╭╭──🅛
╰╰╮╰╭╱▔▔▔▔╲╮╯╭╯───🅞
┏━┓┏┫╭▅╲╱▅╮┣┓╭║║║─🅖
╰┳╯╰┫┗━╭╮━┛┣╯╯╚╬╝─🅞
╭┻╮╱╰╮╰━━╯╭╯╲┊  ║─🅿
╰┳┫▔╲╰┳━━┳╯╱▔┊  ║─🅰
┈┃╰━━╲▕╲╱▏╱━━━┬╨╮─🅲
┈╰━━╮┊▕╱╲▏┊╭━━┴╥╯─🅺

┌───────✺✺✺✺✺✺✺────────✦
│👸✮❮ *ALORA LOGO PACK* ❯✮👸
├───────✮✮✮✮✮✮────────✺
│❗ᴘʟᴇᴀꜱᴇ ᴅᴏɴᴛ ʀᴇᴘᴇᴀᴛ ꜱᴀᴍᴇ ᴄᴏᴅᴇ
│  ᴀᴛ ꜱᴀᴍᴇ ᴛɪᴍᴇ
│
├─➢ ❒Cmd: *.wel*
├──➢ ✦ Dec: *ᴡᴇʟᴄᴏᴍᴇ ꜱᴛʏʟᴇ ʟᴏɢᴏ*
├─➢ ✮ Ex: *.wel Alora*
│
├─➢ ❒ Cmd: *.bye*
├──➢ ✦ Dec: *ʙʏᴇ ꜱᴛʏʟᴇᴅ ʟᴏɢᴏ*
├─➢ ✮Ex: *.bye Alora*
│
├─➢ ❒Cmd: *.marvel*
├──➢ ✦ Dec: *ᴍᴀʀᴠᴇʟ ꜱᴛʏʟᴇᴅ ʟᴏɢᴏ1*
├─➢ ✮ Ex: *.marvel Alora*
│
├─➢ ❒Cmd: *.2marvel*
├──➢ ✦ Dec: *ᴍᴀʀᴠᴇʟ ꜱᴛʏʟᴇ ʟᴏɢᴏ2*
├─➢ ✪Ex: *.2marvel Alora*
│
├─➢ ❒Cmd: *.wolf*
├──➢ ✦ Dec: *ᴡᴏʟꜰ ꜱᴛʏʟᴇ ʟᴏɢᴏ*
├─➢ ✪Ex: *.wolf Alora*
│
├─➢ ❒Cmd: *.lava*
├─➢ ✦ Dec: *ʟᴀᴠᴀ ꜱᴛʏʟᴇ ʟᴏɢᴏ*
├─➢ ✪Ex: *.lava Alora*
│
├─➢ ❒Cmd: *.xmas*
├──➢ ✦ Dec: *xᴍᴀꜱ ꜱᴛʏʟᴇ ʟᴏɢᴏ*
├─➢ ✪Ex: *.xmas Alora*
│
├─➢ ❒Cmd: *.round*
├──➢✦ Dec: *ʀᴏᴜɴᴅ ꜱᴛʏʟᴇ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.round { image url }*
│
├─➢ ❒Cmd: .*.quot*
├──➢ ✦  Dec: *ǫᴜᴏᴛᴇᴅ ꜱᴛʏʟᴇ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.quot Alora*
│
├─➢ ❒Cmd: *.harta*
├──➢ ✦ Dec: *ʜᴀʀᴛᴀ ꜱᴛʏʟᴇᴅ ʟᴏɢᴏ*
├─➢ ✪Ex: *.harta Alora
│
├─➢ ❒Cmd: *.1917*
├──➢ ✦ Dec: *ᴏʟᴅ ꜱᴛʏʟᴇᴅ ʟᴏɢᴏ*
├─➢ ✪Ex: *.1917 Alora
│
├─➢ ❒Cmd: *.minion*
├──➢ ✦ Dec: *ᴍɪɴɪᴏɴ ꜱᴛʏʟᴇ ʟᴏɢᴏ*
├─➢ ✪Ex: *.minion Alora
│
├─➢ ❒Cmd: *.holo*
├──➢ ✦  Dec: *ʜᴏʟᴏ ꜱᴛʏʟᴇ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.holo Alora*
│
├─➢ ❒Cmd: *.metalp*
├──➢ ✦  Dec: *ᴍᴇᴛᴀʟ ꜱᴛʏʟᴇ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.metalp Alora*
│
├─➢ ❒Cmd: *.avengers*
├──➢ ✦  Dec: *ᴀᴠᴇɴɢᴇʀꜱ ꜱᴛʏʟᴇ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.avengers Alora*
│
├─➢ ❒Cmd: *.halloween*
├──➢ ✦  Dec: *ꜱᴇɴᴅ ʜᴀʟʟᴏᴡᴇᴇɴ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.halloween Alora
│
├─➢ ❒Cmd: *.horror*
├──➢ ✦  Dec: *ꜱᴇɴᴅ ʜᴏʀʀᴏʀ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.horror Alora*
│
├─➢ ❒Cmd: *.glossyc*
├──➢ ✦  Dec: *ꜱᴇɴᴅ ɢʟᴏꜱꜱʏ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.glossyc Alora*
│
├─➢ ❒Cmd: *.deluxe*
├──➢ ✦  Dec: *ꜱᴇɴᴅ ᴅᴇʟᴜxᴇ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.deluxe Alora*
│
├─➢ ❒Cmd: *.glossyb*
├──➢ ✦  Dec: *ꜱᴇɴᴅ ɢʟᴏꜱꜱʏ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.glossyb Alora*
│
├─➢ ❒Cmd: *.joker*
├──➢ ✦  Dec: *ꜱᴇɴᴅ ᴊᴏᴋᴇʀ ʟᴏɢᴏ*
├─➢ ✪ Ex: *.joker Alora*
│
│✜✜✜✜✜✜✜✜✜✜✜✜✜✜✜✜✜✜✜    
│❮✮✮Not available temporary✮✮❯
│❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂❂       
└───────────────────────▷❯

` , rowId:"rowid8"},


]

const sections = [{title: "Section 2", rows: rows}]


    var time = new Date().toLocaleString('SI', { timeZone: 'Asia/Colombo' }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*𝘎𝘖𝘖𝘋 𝘔𝘖𝘙𝘕𝘐𝘕𝘎 ☀️*'
if (hrs >= 12 && hrs <= 17) wish = '*𝘎𝘖𝘖𝘋 𝘈𝘍𝘛𝘌𝘙𝘕𝘖𝘖𝘕 🌤️*'
if (hrs >= 17 && hrs <= 19) wish = '*𝘎𝘖𝘖𝘋 𝘌𝘝𝘌𝘕𝘐𝘕𝘎 🌌*'
if (hrs >= 19 && hrs <= 24) wish = '*𝘎𝘖𝘖𝘋 𝘕𝘐𝘎𝘏𝘛 🌝*'



const button = {
 buttonText: '📝CLICK ME👸✅',
 description: "╭╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╮\n👸✅ALORA COMMANDS✅👸 \n╰╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╯\n\n╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」\n│\n│ᴛʏᴘᴇ: .alora to get full Command list*\n├─────────●●►\n│👋Hello User,*  `+wish+` \n│👤Name:* Ms.Alora\n│💎Role:* Developer\n│Time⌚:* `+time+` \n│📡Server:* Github\n│📦Frameworks:* Nodejs\n│☬Working As*\n│🛡️ `+Config.WORKTYPE+`* \n│ \n╰──────────▢▹►",
 sections: sections,
 listType: 1
}

await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    

})); 
