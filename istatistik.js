const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");

exports.run = async (client, message, args) => {
  const msg = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setFooter(client.user.tag, client.user.avatarURL())
  .addField(
  "» **Sahibim**","✫ | Ahmet#8445"
  )
    .addField(
      "» **Bellek kullanımı**",
      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
      true
    )
    .addField(
      "» **Çalışma süresi**",
      moment
        .duration(client.uptime)
        .format(" D [gün], H [saat], m [dakika], s [saniye]")
    )

    .addField(
      "» **Sunucular**",
      client.guilds.cache.size.toLocaleString(),
      true
    )
    .addField(
      "» **Kullanıcılar**",
      client.users.cache.size.toLocaleString(),
      true
    )
    .addField(
      "» **Kanallar**",
      client.channels.cache.size.toLocaleString(),
      true
    )
    .addField("» **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField("» **Node.JS sürüm**", `${process.version}`, true)
    .addField("» **Ping**", client.ws.ping + " ms", true)
    .addField(
      "» **CPU**",
      `\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``
    )
    .addField("» **Bit**", `\`${os.arch()}\``, true)
    .setThumbnail(client.user.avatarURL())
  .setImage("https://media.discordapp.net/attachments/704352497422041168/727241966236074054/giphy-5.gif?width=544&height=408")
    .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``)
    .addField("**➥ Linkler**", "[:white_check_mark: Davet Linki](https://discord.com/oauth2/authorize?client_id=777597698055733269&scope=bot&permissions=805314622)\n[:white_check_mark: Destek Sunucu](https://discord.gg/gDdd2ngnSH)\n[:white_check_mark: Website](https://img.freepik.com/free-photo/coming-soon-neon-sign-dark-background-3d-rendering_35913-1058.jpg?size=626&ext=jpg)");
  return message.channel.send(msg);
};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ["i"],
    permLevel: 0,
}

exports.help = {
  name: "istatistik",
};