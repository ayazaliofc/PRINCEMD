let handler = async (m, { conn, text, participants, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid);
    m.reply(`┃🤍 ⃪꯭〬⃝ 𝗚𝗥𝗢𝗨𝗣 : *${groupMetadata.subject}*\n\n┃🍁 ⃪꯭〬⃝ 𝗠𝗘𝗠𝗕𝗘𝗥𝗦 : *${participants.length}*${text ? `\n┃💌 ⃪꯭〬⃝ 𝗠𝗘𝗦𝗦𝗔𝗚𝗘 : ${text}\n` : ''}\n\n┌───⊷ 𝗠𝗘𝗡𝗧𝗜𝗢𝗡𝗦\n` + users.map(v => '┃🪻 ⃪꯭〬⃝ @' + v.replace(/@.+/, '')).join`\n` + '\n © 𝗔𝗬𝗮𝗭𝘇 ♥︎', null, {
        mentions: users
    });
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.group = true

export default handler;
