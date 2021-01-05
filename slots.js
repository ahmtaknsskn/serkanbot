const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const slots = ["🍇", "🍊", "🍐", "🍒", "🍋"];

  var slot1 = slots[Math.floor(Math.random() * slots.length)];
  var slot2 = slots[Math.floor(Math.random() * slots.length)];
  var slot3 = slots[Math.floor(Math.random() * slots.length)];
  let motion = new Discord.MessageEmbed().addField(
    `${slot1} : ${slot2} : ${slot3}`,
    "Tebrikler, Kazandın"
  );
  let embed = new Discord.MessageEmbed().addField(
    `${slot1} : ${slot2} : ${slot3}`,
    "Maalesef, Kaybettin"
  ); 
  if (slot1 === slot2 || slot1 === slot3 || slot2 === slot3) {
    message.channel.send(embed);
  } else {
    
    message.channel.send(motion);
  } 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
};

exports.help = {
  name: "slots",
  description:
    "Bu Kod Pink Code Shareden `Motion e Aitdir Çalmak Paylaşmak Yasak!",
  usage: "Bu Kod Pink Code Shareden `Motion e Aitdir Çalmak Paylaşmak Yasak!"
}; 
