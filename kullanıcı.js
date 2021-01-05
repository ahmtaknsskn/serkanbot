const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Matrix Sizlerle.")
.setTitle("Kullanıcı Komutları")
 .setTimestamp()
.setDescription(" **<a:9689_tick:776405128005025803>.avatar** = Avatarınıza bakarsınız.  \n **<a:9689_tick:776405128005025803>.yetkilerim** = Yetkilerini görürsün. \n **<a:9689_tick:776405128005025803>.profil** = Profilini görürsün.\n  **<a:9689_tick:776405128005025803>.sunucuresmi** = Sunucu resmini gösterir. \n **<a:9689_tick:776405128005025803>.ping** = Botun Pingine Bakarsın.  \n **<a:9689_tick:776405128005025803>.id** = Birisinin id'sine Bakarsın. \n **.<a:9689_tick:776405128005025803>davet** = Beni Sunucuna Ekle. \n **<a:9689_tick:776405128005025803>.botbilgi** = Bot istatistiklerini görürsünüz. \n  **<a:9689_tick:776405128005025803>.bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. \n  **<a:9689_tick:776405128005025803>.tavsiye** = Yazdığınız tavsiyeyi yapımcılarıma bildirir.")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}