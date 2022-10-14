import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)


if (command == 'whmods1') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Saya Owner WHMODS;Bot;;Md\nFN:Saya Owner WH MODS Bot WhatsApp, Md\nNICKNAME:👑 Owner WH MODS Bot\nORG:WH\nTITLE:MODS\nitem1.TEL;waid=6282127487538:+62 821-2748-7538\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://www.youtube.com/channel/UCMx4e8anOq_Olt2nMSv0Cow\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:whmods41@gmail.com\nitem3.X-ABLabel:💌 Mail Owner WH MODS BOT\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 KEPO LU YAH\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
let caption = `👋 Hai *${name} @${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.sendButton(m.chat, caption, author, null, [['🎀 Sapa Owner', 'Huuu']], m, { quoted: tag_own, mentions: conn.parseMention(caption) })
}
if (command == 'whmods2') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6282127487538:+62 821-2748-7538\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
}
if (command =='whmods3')
  contacts: [{
 "displayName": "Owner DevicBT",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Owner DevicBT\nitem1.TEL;waid=6285752271870:6285752271870\nitem1.X-ABLabel:📍 Creator\nitem2.EMAIL;type=INTERNET:Nothing\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://github.com/LaxirMods\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Indonesia\nitem5.X-ABLabel:───────[ DevicBT ]───────\nEND:VCARD"
  }, {
   "displayName": "👑 Developer Bot",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Bg Drixx\nitem1.TEL;waid=6285332039348:6285332039348\nitem1.X-ABLabel:📍 Creator\nitem2.EMAIL;type=INTERNET:laxirmods@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://youtube.com/channel/UC4KkbFZ15ILdDhLJeytnFDw\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Indonesia\nitem5.X-ABLabel:───────[ DevicBT ]───────\nEND:VCARD"
  }, {  
    }]
    await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
let caption = `👋 Hai *${name} @${who.split("@")[0]}*, itu nomor ownerku, jangan dispam  kak😊`
}

handler.help = ['whmods1', 'whmods2', 'whmods3']
handler.tags = ['info']

handler.command = /^(whmods1|whmods2|whmods3)$/i

export default handler
