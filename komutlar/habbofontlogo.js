const Discord = require('discord.js');
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
  if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);
    } else {

         
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        

          talkedRecently.delete(message.author.id);
        }, 3000);
    } 
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** :envelope: `)
  const linqo = `https://habbofont.net/font/habbo_new/${yazi}.gif`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter('Habbo Font Logo Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazıfoto','yazı-foto'],
    permLevel: 0
}

exports.help = {
    name: 'habbo',
    description: 'Yazdığınız yazıyı dinamik çevirir.',
    usage: 'habbo <yazı>'
}