const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
require('moment-duration-format');//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.run = async(client, message, args) => { //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

  if (talkedRecently.has(message.author.id)) {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    } else {
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
 
        talkedRecently.add(message.author.id);
        setTimeout(() => {
    //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
          talkedRecently.delete(message.author.id);
        }, 3000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }  //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
let rache1 = new Discord.MessageEmbed()
.setAuthor("Rache")//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
.setThumbnail(client.user.avatarURL())//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
.addField("__**Bot Verileri**__", `>  :man_technologist:   **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n>  :gift_heart:  **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n>  :bulb:   **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `>  📌  **Bot Sahibi**  <@965838437636788244> \n\n> :trackball: \ **Bot Geliştiricisi**  <@965838437636788244> \n`)
.addField("__**Sürümler**__", `>  📌  **Discord.js Sürümü** **|**  **v${Discord.version}** \n>  :medal:  **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__ ", `> **${client.ws.ping}** ms`,true)
.setColor("#ffd100")
message.channel.send(rache1)
}//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.conf = {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  enabled: true,
guildOnly: false,
aliases: ['bot-bilgi','i','botbilgi'],//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  permLevel: 0
}//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.help = {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
name: "istatistik",
}//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5