const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
if(args[0] === 'Aktif') {
    db.set(`kufur_${message.guild.id}`, "Aktif")
    message.channel.send('Başarılı Şekilde `Aktif` Edildi.')
  return
}
if (args[0] === 'Deaktif') {
  db.delete(`kufur_${message.guild.id}`)
message.channel.send('Başarılı Şekilde `Deaktif` Edildi')
return
}
  message.channel.send('Lüten `Aktif` yada `Deaktif` Yazın!')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-engel',
 description: 'Davet Log Kanalını Belirler',
 usage: 'davet-kanal-ayarla #kanal'
};