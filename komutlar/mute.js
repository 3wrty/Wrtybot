const Discord = require('discord.js')



    exports.run = async(client, message, args) => {
    
		if(!message.member.roles.cache.has("1076070813834416160")){
            const yetkiyok = new Discord.MessageEmbed()
            .setDescription(`${message.author} **Bu kodu kullanmak için gerekli yetkiye sahip değilsin.**`)
            .setColor('#ff0000')
            return message.channel.send(yetkiyok)
        }
    
        let kullanıcı = message.mentions.members.first();
        let sebep = args.slice(1).join(' ')

        if(!kullanıcı){
            const cmfhata = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`**Lütfen Kullanıcı Belirt.**`)
            return message.channel.send(cmfhata)
        }

        if(!sebep){
            const cmfhata = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`**Lütfen Sebep Belirt**`)
            return message.channel.send(cmfhata)
        }
        
        if(kullanıcı && sebep){
            const cmfmute = new Discord.MessageEmbed()
            .setColor('#00ff00')
            .setDescription(`${kullanıcı} Kişisine ${message.author} Tarafından **${sebep}** Sebebi İle Mute Atıldı.`)
            .setFooter(kullanıcı.user.username + " Umarız Hatalarını Birdaha Tekrarlamazsın...")
            message.channel.send(cmfmute)

            // Mute Atıldığında Verilecek & Alınacak Roller
            kullanıcı.roles.add('1076909184689381476')
            kullanıcı.roles.remove('ÜYE ROL İD')
        }

    } // CodeMareFi - #MareFi && #CMF

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Mute','MUTE','sustur','Sustur','SUSTUR'],
    permLevel: 0
}

exports.help = {
    name: 'mute'
}