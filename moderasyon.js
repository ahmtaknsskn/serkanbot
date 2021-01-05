const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {
  let dil = await db.fetch(`dil_${message.guild.id}`);
if (dil ==undefined){
 //Ayarlanmamis ise
message.channel.send(" <a:9689_tick:776405128005025803>**.sil** = Yazdığınız miktarda mesajı siler. \n  <a:9689_tick:776405128005025803>**.ban** = Etiketlediğiniz kişiyi banlarsınız.  \n  <a:9689_tick:776405128005025803>**.kick** = Etiketlediğiniz kişiyi atarsınız.  \n  <a:9689_tick:776405128005025803>**.duyuru** = Bota duyuru yaptırırsınız.  \n <a:9689_tick:776405128005025803>**.küfür** = Küfür engel sistemini açarsınız.  \n  <a:9689_tick:776405128005025803>**.reklam** = Reklam engel sistemi açarsınız. \n <a:9689_tick:776405128005025803>**.slowmode** = Yavaş modu ayarlarsınız.  \n  <a:9689_tick:776405128005025803>**.forceban** = Birisine id ban atarsınız. \n <a:9689_tick:776405128005025803>**.unban** = Birisinin banını açarsınız.  \n  <a:9689_tick:776405128005025803>**.sa-as** = Bot biri sa dedimi cevap verir.  \n  <a:9689_tick:776405128005025803>**.sunucubilgi** = Sunucu bilgilerini görürsün.  \n  <a:9689_tick:776405128005025803>**.üyedurum** = Üyelerin durumlarını görürsün. \n  <a:9689_tick:776405128005025803>**.çekiliş** = Çekiliş başlatırsınız.  \n  <a:9689_tick:776405128005025803>**.kilitle** = Komutu Kullandığınız Kanalda Yetkililer Dışındaki Kişiler Mesaj Yazamaz.  \n  <a:9689_tick:776405128005025803>**.kilitaç** = Kilitle Komutunun Zıttıdır. \n  <a:9689_tick:776405128005025803>**.rolver** = Etiketlediğiniz Kişiye Etiketlediğiniz Rolü Verir. \n  <a:9689_tick:776405128005025803>**.rolal** = Etiketlediğiniz Kişiden Etiketlediğiniz Rolü Alır. \n  <a:9689_tick:776405128005025803>**.otocevap** = Açarak belirli mesajlar yazdığınızda botlar belirli cevaplar verir. \n  <a:9689_tick:776405128005025803>**.mute** = Etiketlediğiniz Kişiyi Susturur. \n  <a:9689_tick:776405128005025803>**.muterole** = Mute Rolünü Ayarlar. \n  <a:9689_tick:776405128005025803>**.muterole create [ad]** = Mute Rolünü Oluşturur.") 

}



  
  if (dil == 'tr'){
const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Matrix Sizlerle.")
.setTitle("Matrix Moderasyon Komutları ")
 .setTimestamp()
.setDescription(" <a:9689_tick:776405128005025803>**.sil** = Yazdığınız miktarda mesajı siler. \n  <a:9689_tick:776405128005025803>**.ban** = Etiketlediğiniz kişiyi banlarsınız.  \n  <a:9689_tick:776405128005025803>**.kick** = Etiketlediğiniz kişiyi atarsınız.  \n  <a:9689_tick:776405128005025803>**.duyuru** = Bota duyuru yaptırırsınız.  \n <a:9689_tick:776405128005025803>**.küfür** = Küfür engel sistemini açarsınız.  \n  <a:9689_tick:776405128005025803>**.reklam** = Reklam engel sistemi açarsınız. \n <a:9689_tick:776405128005025803>**.yavaşmod** = Yavaş modu ayarlarsınız.  \n  <a:9689_tick:776405128005025803>**.forceban** = Birisine id ban atarsınız. \n <a:9689_tick:776405128005025803>**.unban** = Birisinin banını açarsınız.  \n  <a:9689_tick:776405128005025803>**.sa-as** = Bot biri sa dedimi cevap verir.  \n  <a:9689_tick:776405128005025803>**.sunucubilgi** = Sunucu bilgilerini görürsün.  \n  <a:9689_tick:776405128005025803>**.çekiliş** = Çekiliş başlatırsınız.  \n  <a:9689_tick:776405128005025803>**.kilitle** = Komutu Kullandığınız Kanalda Yetkililer Dışındaki Kişiler Mesaj Yazamaz.  \n  <a:9689_tick:776405128005025803>**.kilitaç** = Kilitle Komutunun Zıttıdır. \n  <a:9689_tick:776405128005025803>**.rolver** = Etiketlediğiniz Kişiye Etiketlediğiniz Rolü Verir. \n  <a:9689_tick:776405128005025803>**.rolal** = Etiketlediğiniz Kişiden Etiketlediğiniz Rolü Alır. \n  <a:9689_tick:776405128005025803>**.otocevap** = Açarak belirli mesajlar yazdığınızda botlar belirli cevaplar verir. \n  <a:9689_tick:776405128005025803>**.sustur** = Etiketlediğiniz Kişiyi Susturur.")

message.channel.send(mod)

}
  
if (dil == 'en'){
const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Matrix Available With You.")
.setTitle("Matrix Moderation Commands")
 .setTimestamp()
.setDescription(" <a:9689_tick:776405128005025803>**.clear** = Deletes the amount of messages you have written. \n  <a:9689_tick:776405128005025803>**.ban** = You ban the person you tagged.  \n  <a:9689_tick:776405128005025803>**.kick** = You assign the person you tagged.  \n  <a:9689_tick:776405128005025803>**.announcement** = You make the boat announcement.  \n <a:9689_tick:776405128005025803>**.swearing** = You open the swearing barrier system.  \n  <a:9689_tick:776405128005025803>**.advertisement** = You open an ad blocking system. \n <a:9689_tick:776405128005025803>**.slowmode** = You set the slow mode.  \n  <a:9689_tick:776405128005025803>**.forceban** = You id ban someone. \n <a:9689_tick:776405128005025803>**.unban** = You ban someone.  \n  <a:9689_tick:776405128005025803>**.hi-hello** = Bot someone replies I said hi.  \n  <a:9689_tick:776405128005025803>**.serverinformation** = You see the server information.  \n  <a:9689_tick:776405128005025803>**.draw** = You start a lottery. \n  <a:9689_tick:776405128005025803>**.lock** = People Other Than Authorities Cannot Write Messages On The Channel On Which You Are Using The Command.  \n  <a:9689_tick:776405128005025803>**.unlock** = It is the Opposite of the Lock Command. \n  <a:9689_tick:776405128005025803>**.giverole** = Gives The Person We Tagged The Role You Tagged. \n  <a:9689_tick:776405128005025803>**.takerole** = Gets The Role You Tagged From The Person You Tagged. \n  <a:9689_tick:776405128005025803>**.autoanswer** = When you open and write specific messages, bots give specific answers.")

message.channel.send(mod)

}
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}