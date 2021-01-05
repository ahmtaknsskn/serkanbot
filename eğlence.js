const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Matrix Sizlerle.")
.setTitle("Matrix Eğlence Komutları ")
 .setTimestamp()
.setDescription("**<a:9689_tick:776405128005025803> .tersyazı** = Bir Yazıyı Bot Ters Yazar. \n  **<a:9689_tick:776405128005025803> .mcskin** = Yazdığınız ismin minecraft görünüşünü atar. \n **<a:9689_tick:776405128005025803> .fbi** = Bot FBi Gif Atar. \n **<a:9689_tick:776405128005025803>.düello** = Düello Atarsın.  \n  **<a:9689_tick:776405128005025803> .wasted** = Polis tarafından yakalanırsın.  \n  **<a:9689_tick:776405128005025803> .atatürk** = Dene ve gör... (1881-1938) \n  **<a:9689_tick:776405128005025803> .kutuaç** = Brawl Stars Kutu Açarsınız. \n  **<a:9689_tick:776405128005025803> .adam-asmaca** = Adam Asmaca Oynarsınız.  ")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}