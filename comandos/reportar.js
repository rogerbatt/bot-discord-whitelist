const Discord = require("discord.js");
module.exports.run = async (bot, message, args ) => {
    if(message.content.toLowerCase() === 'al!reportar' && message.channel.id === 'ID DA SALA') {
        message.delete({timeout: 8});
        let guild = message.guild;
        let channelc = await guild.channels.create(`chat-report-${message.author.username}`,{
            type: 'text',
            parent: 'ID DO GUIA',
            permissionOverwrites:[
                {
                    allow: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','EMBED_LINKS','ATTACH_FILES','SEND_MESSAGES'],
                    id: message.author.id
                },
                {
                    deny: 'VIEW_CHANNEL',
                    id: guild.id
                }
            ]

        });
        channelc.send(`Olá <@${message.author.id}>, quem você está denunciando?`).then(async msg => {
            let nome = msg.channel.createMessageCollector(m => m.author.id === message.author.id, {
                max: 1
            });
            nome.on("collect", () => {
                channelc.send(`Oque aconteceu?`).then(async msg2 => {
                    let historiar = msg.channel.createMessageCollector(m => m.author.id === message.author.id, {
                        max: 1
                    });
                    historiar.on("collect", () => {
                        channelc.send(`Tem algum video? se sim, mande o link`).then(async msg2 => {
                            let video = msg.channel.createMessageCollector(m => m.author.id === message.author.id, {
                                max: 1
                            });
                            video.on("collect", () => {
                                channelc.send(`Tem alguma foto? se sim, mande o link`).then(async msg2 => {
                                    let msgg = msg.channel.createMessageCollector(m => m.author.id === message.author.id, {
                                        max: 1
                                    });
                                        msgg.on("collect", () => {
                                        channelc.send(`Sua denuncia foi feita ! \n Logo menos será analisada e terá um retorno.`).then(async msg2 => {
                                        var embed = new Discord.MessageEmbed()
                                            .setTitle(`Denuncia feita por ${message.author.username}`)
                                            .setDescription(`**Quem foi o denunciado:**  ${nome.collected.first().content}\n\n**História da denuncia:** ${historiar.collected.first().content}\n\n**Foto da denuncia:** ${msgg.collected.first().content}\n\n**Video da denuncia:** ${video.collected.first().content}`)
                                            .setColor(0xFF0000)
                                            .setTimestamp(new Date())
                                            .setThumbnail('https://omd.com.br/wp-content/uploads/2019/08/2019-AGOSTO-1-IMAGEM.png')
                                            bot.channels.cache.get("ID DA SALA").send(embed); 
                                            channelc.delete({timeout: 36000})
                        
                                        })
                                    })
                
                                })
                            })
        
                        })
                    })

                })
            })
        })
    }
}
module.exports.help = {
    name: "report"
}