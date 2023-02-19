const Discord = require('discord.js')

    exports.run = async(client, message, args) => {
    
		if(!message.member.roles.cache.has("1076070813834416160")){
            const yetkiyok = new Discord.MessageEmbed()
            .setDescription(`${message.author} **Bu kodu kullanmak için gerekli yetkiye sahip değilsin.**`)
            .setColor('#ff0000')
            return message.channel.send(yetkiyok)
        }
    
        let kullanıcı = message.mentions.members.first();

        if(!kullanıcı){
            const cmfhata = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`**Lütfen Kullanıcı Belirt.**`)
            return message.channel.send(cmfhata)
        }
        
        if(kullanıcı){
            const cmfmute = new Discord.MessageEmbed()
            .setColor('#00ff00')
            .setDescription(`${kullanıcı} Kişisinin Mutesi ${message.author} Tarafından Kaldırıldı.`)
            .setFooter(kullanıcı.user.username + " Umarız Hatalarını Birdaha Tekrarlamazsın...")
            .setThumbnail(kullanıcı.user.avatarURL({dynamic: true, size: 2048}))
            message.channel.send(cmfmute)

            // Mute Kaldırıldığında Alınacak & Verilecek Roller
            kullanıcı.roles.remove('1076909184689381476')
            kullanıcı.roles.add('1076456272213332078')
        }

    } // CodeMareFi - #MareFi && #CMF

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['UnMute','UNMUTE','susturmakaldır','Susturmakaldır','SUSTURMAKALDIR'],
    permLevel: 0
}

exports.help = {
    name: 'unmute'
}