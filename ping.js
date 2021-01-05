const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let matrix = new Discord.MessageEmbed();

  message.channel.send(`🏓 Pinging....`).then(msg => {
    const matrix = new Discord.MessageEmbed()
      .setTitle("Matrix Bot | Botun Pingi")
      .setDescription(
        ` 🏓 Ping!\n Mesaj Gecikmesi: ${Math.floor(
          msg.createdTimestamp - message.createdTimestamp
        )}ms\n API Gecikmesi: ${Math.round(client.ws.ping)}ms`
      )
      .setColor("RANDOM");
    msg.edit(matrix);
    msg.edit("\u200B");
  });
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ping",
  description:
    "Botun Pingini Gösterir Bana Aitdir Yani `Matrix Shareye Çalmak Paylaşmak Yasak!",
  usage:
    "Botun Pingini Gösterir Bana Aitdir Yani `Matrix Çalmak Paylaşmak Yasak!"
};
