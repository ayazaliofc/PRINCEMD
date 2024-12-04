let handler = async (m, { conn, args, usedPrefix, command }) => {
let pp = ''
m.react('⏳')
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let str = `⏤͟͟͞➣⃟⃟🍒𝚫𝐘𝚫𝚭~ ⃟⃟⃟⃟❤️ ᴜᴘᴛɪᴍᴇ\n\n🎗️ʙᴏᴛ ᴀᴄᴛɪᴠᴇ ᴅᴜʀᴀᴛɪᴏɴ\n *${muptime}⏰*`
    conn.sendMessage(m.chat, {
      text: str,
      contextInfo: {
      
      mentionedJid: [m.sender],
      isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363026894486244@g.us',
                newsletterName: global.author,
                serverMessageId: -1
            },
      forwardingScore: 999,
      externalAdReply: {
      title: "⏤͟͟͞➣⃟⃟🍒𝚫𝐘𝚫𝚭~ ⃟⃟⃟⃟❤️",
      body: "ʀᴜɴɪɴɢ sɪɴᴄᴇ",
      thumbnailUrl: pp,
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: false
      }}})
      m.react('✅')
}
handler.help = ['runtime']
handler.tags = ['main']
handler.command = ['runtime', 'uptime', 'run']
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm ', s, 's '].map(v => v.toString().padStart(2, 0)).join('')
}
