const Discord = require('discord.js');
const data = require('quick.db');
//Rache Code , Telif Hakları Vardır, https://discord.gg/VcfpUgtajB
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu Komudu Kullanabilmek İçin **`Yönetici`** Yetkisine Sahip Olmalısın!')

//Rache Code , Telif Hakları Vardır, https://discord.gg/VcfpUgtajB

message.delete();
message.channel.createWebhook(message.author.username, {avatar: message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'}).then(async web => {
const hook = new Discord.WebhookClient(web.id, web.token);
const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/1036651524006367262/1039211936631500890/standard.gif');
hook.send(`📢 \`${message.guild.name}\` **Sunucu Kuralları**
\`¤\` **K1**➦ Sohbet etmeye başlamadan önce mutlaka ilgili bölümü seçtiğinizden emin olun. ilgisi olmayan odaya yazdığınız metinler silinecektir.
\`¤\` **K2**➦ Konuşma kanallarında spam ve flood kesinlikle yasaktır.  (flood sınırı 3 tür.)
\`¤\` **K3**➦ Küfür , hakaret ve alay kesinlikle yasaktır.
\`¤\` **K4**➦ Caps Lock açık şekilde yazı yazmayalım.
\`¤\` **K5**➦ Link paylaşmak yasaktır.
\`¤\` **K6**➦ Youtube ve Twitch kanalı, Discord Sunucusu vb. reklamını yapmayalım
\`¤\` **Her kural yazılı şekilde belirtilmez. Doğruyu yanlışı ayırt edebilmelisiniz.**

> \`Sunucuya Kayıt Olan Tüm Üyeler İçin Kurallar Okunmuş sayılacaktır, Teşekkürler.\`

\Sunucu Sınırsız Link https://discord.gg/FCd9v86D44 @everyone

`, attachment).then(() => hook.delete())//Rache Code , Telif Hakları Vardır, https://discord.gg/VcfpUgtajB
})
};
exports.conf = {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  enabled: true,//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  guildOnly: true,//Rac//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5he Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  aliases: [],//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  permLevel: 0
}//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.help = {
  name: 'kurallar'
  //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5