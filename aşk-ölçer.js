exports.run = async (client, msg, args) => {
    let ask=[
      "Aşkölçer %3 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %6 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %9 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %12 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %18 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %20 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %23 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %26 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %29 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %30 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %40 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %50 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %60 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %70 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %73 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %76 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %79 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %82 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %85 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %88 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %90 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %91 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %92 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %93 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %94 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %95 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %96 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %97 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %98 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %99 Gösteriyor. [Saniyelerde Değişebilir!]",
      "Aşkölçer %100 Gösteriyor.[Saniyelerde Değişebilir!]",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: ('🚫 Kimi Sevdiğini etiketlemelisin..')
  }});
 
 
 
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${ask[Math.floor(Math.random() * 30)]}.`)
    }})
    }
 
 
  }
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
 
  exports.help = {
    name: 'aşkölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }