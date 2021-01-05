const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Matrix Sizlerle.")
.setTitle("Jail Komutları")
 .setTimestamp()
.setDescription(" c**.jail-rol ayarla/sıfırla** = Jail komutunu kullandığınızda verilecek rolü Ayarlar.  \n <a:9689_tick:776405128005025803>**.jail-kanal ayarla/sıfırla** = Jail log kanalını ayarlar. \n <a:9689_tick:776405128005025803>**.jail-yetkilisi ayarla/sıfırla** = Jail komutunu kullanabilecek permi ayarlar. \n <a:9689_tick:776405128005025803>**.jail** = Etiketlediğiniz kişiyi belirli bir süre hapishaneye gönderirsiniz.")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'jaily',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}