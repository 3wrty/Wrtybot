const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('WrtyBot',`
**w!bilgiler** : Bilgilerinizi gösterir.
**w!günlük-para**: Günlük Para Alırsınız.
**w!hesap-oluştur** : Hesap Oluşturur.
**w!kasalar** : Kasaları listeler.
**w!kasabilgi** : Kasalar hakkında bilgi alırsınız.
**w!kasaaç** : Kasa Açarsınız.
**w!kumar** : Kumar Oynarsınız
**w!transfer** : Hesabınızdan başka bir hesaba para transferi yaparsınız.`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["ekonomi"], 
  permLevel: 0
};
exports.help = {
  name: 'ekonomi'
};