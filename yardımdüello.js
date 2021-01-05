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
      `➤ Seçenekler`,
  `    
<a:9689_tick:776405128005025803> | **Saldır seçeneği : Rakibe 1-100 arası bir hasar vurur.**.  
<a:9689_tick:776405128005025803> | **Savun seçeneği : Rakibinizin vuruşundan 1-10 arası hasar etkilenirsiniz.**.  
<a:9689_tick:776405128005025803> | **Ultra güç seçeneği : Rakibe 150-300 arası bir hasar vurur.**.  
<a:9689_tick:776405128005025803> | **Saklan seçeneği : Saklanırsınız ve hükmen mağlup sayılırsınız.**.  
<a:9689_tick:776405128005025803> | **. seçeneği : Sahibime özel komuttur bu komutu kullandığınız anda oynadığınız oyun duracaktır.**.  `
     ) 
    .addField(
      `➤ Bilgilendirme`,
  `
<a:9689_tick:776405128005025803> | **Saldır seçeneği : Rakibe 1-100 arası bir hasar vurur.**.  
<a:9689_tick:776405128005025803> | **Savun seçeneği : Rakibinizin vuruşundan 1-10 arası hasar etkilenirsiniz.**.  
<a:9689_tick:776405128005025803> | **Ultra güç seçeneği : Rakibe 150-300 arası bir hasar vurur.**.  
<a:9689_tick:776405128005025803> | **Saklan seçeneği : Saklanırsınız ve hükmen mağlup sayılırsınız.**.  
<a:9689_tick:776405128005025803> | **. seçeneği : Sahibime özel komuttur bu komutu kullandığınız anda oynadığınız oyun duracaktır.**.  
<a:9689_tick:776405128005025803> | **.1vs1 @etiket şeklinde oynama daveti gönderirsiniz.**.  
<a:9689_tick:776405128005025803> | **davetiniz kabul ediltikten sonra 5 seçenek var.**.  
<a:9689_tick:776405128005025803> | **Bu seçenekler : saldır,savun,ultra güç,kaç,.**.
<a:9689_tick:776405128005025803> | **Her iki tarafında 500 canı vardır** `
    )

    .addField(
      `**➤ Bağlantılar  **`,
      ` » [Destek Sunucusu](https://discord.gg/ZPEyKRkpBS) \n   » [Web Site](http://matrix.tr.ht) \n  » [Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=777597698055733269&scope=bot&permissions=805314622)`
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
  aliases: ["düelloyardım"],
  permLevel: 0
};

exports.help = {
  name: "1vs1yardım",
  description: ".",
  usage: ""
};

 