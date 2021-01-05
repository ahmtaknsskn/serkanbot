const Discord = require("discord.js");
const db = require('quick.db')

exports.run = async (client, message, args) => {
  if (!db.has(`pre_${message.guild.id}`) == true) {
    
    

  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("#140589")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/777472150826385418/781478854254264340/download.jpg"
    
    )
    .setDescription(
  
      
      `Toplamda Botta **${client.commands.size + 0}** Adet Komut Bulunuyor!` +
        "\n\n `.istatistik` **Yazarak Botun İstatistiklerine Ulaşa Bilirsiniz.** \n `.davet` **Yazarak Botun Davet Linkini Alırsınız.**"
    )
    .addField(
      `➤ Komutlar`,
 `
<a:9689_tick:776405128005025803> | **.bilgilendirmeler:** Bilgi Komutlarını Gösterir.  
<a:9689_tick:776405128005025803> | **.kullanıcı:** Kullanıcı Komutlarını Gösterir.
<a:9689_tick:776405128005025803> | **.moderasyon:** Yetkili Komutlarını Gösterir.
<a:9689_tick:776405128005025803> | **.eğlence:** Eğlence Komutlarını Gösterir.
<a:9689_tick:776405128005025803> | **.admin:** Admin Komutlarını Gösterir.
<a:9689_tick:776405128005025803> | **.uyarı:** Uyarı Komutlarını Gösterir. 
<a:9689_tick:776405128005025803> | **.jaily:** Jail Komutlarını Gösterir. 
<a:9689_tick:776405128005025803> | **.logo:** Logo Komutlarını Gösterir.  `
    )

    

    .addField(
      `➤ Bilgilendirme`,
  `
<a:9689_tick:776405128005025803> | **#2021 Büyük Yılbaşı Güncellemesi
<a:9689_tick:776405128005025803> | **Matrix Bot DBL'de Onaylandı!**.  
<a:9689_tick:776405128005025803> | **Oy Vererek Bize Destek Olabilirsiniz!**.  
<a:9689_tick:776405128005025803> | **Matrix Bot Her Gün Güncelleniyor!**.
<a:9689_tick:776405128005025803> | **Botu Ekleyerek Bizi Sevindirirsiniz** `
)
    .setImage('https://cdn.discordapp.com/attachments/782913990169722890/782920539470561301/standard_18.gif')

    .addField(
      `**➤ Bağlantılar  **`,
      ` » [Destek Sunucusu](https://discord.gg/ZPEyKRkpBS) \n  » [Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=777597698055733269&scope=bot&permissions=805314622 )\n   » [Website](http://yapımda) \n   » [Vote](https://top.gg/bot/777597698055733269) \n   » [Frenzy Official](https://discord.gg/eJMSkvkyPF)  `
    )
    .setFooter(
      
      
      
      
      
      `
${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  return message.channel.send(motionEmbed);
  }   
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardım"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: ".",
  usage: ""
};

 