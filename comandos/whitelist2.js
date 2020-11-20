const mysql = require("mysql");
const Discord = require("discord.js");
module.exports.run = async (bot, message, args ) => {
    if(message.content.toLowerCase() === 'al!wl' && message.channel.id === 'ID DA SALA') {
        message.delete({timeout: 8});
        let guild = message.guild;
        let channelc = await guild.channels.create(`whitelist-${message.author.username}`,{
            type: 'text',
            parent: 'ID DA CLASSE',
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
        channelc.send(`<@${message.author.id}>\nOlá, Qual o nome do seu personagem?`).then(async msg => {
            let nome = msg.channel.createMessageCollector(m => m.author.id === message.author.id, {
                max: 1
            });
            nome.on("collect", () => {
                channelc.send(`Muito prazer ${nome.collected.first().content} !`)
                channelc.send(`Qual sua idade?`).then(async msg2 => {
                    let idade = msg.channel.createMessageCollector(m => m.author.id === message.author.id, {
                        max: 1
                    });
                    idade.on("collect", () => {
                        channelc.send(`Para começar responda com suas palavras o que é **VDM** e **cite um exemplo**`).then(async msg2 => {
                            let vdm = msg.channel.createMessageCollector(m => m.author.id === message.author.id, {
                                max: 1
                            });
                            vdm.on("collect", () => {
                                channelc.send(`Responda com suas palavras o que é **RDM** e **cite um exemplo**`).then(async msg2 => {
                                    let rdm = msg.channel.createMessageCollector(m => m.author.id === message.author.id, {
                                        max: 1
                                    });
                                    rdm.on("collect", () => {
                                        channelc.send(`Responda com suas palavras o que é **COMBAT LOGGING** e **cite um exemplo**`).then(async msg2 => {
                                            let clog = msg.channel.createMessageCollector(m => m.author.id === message.author.id, {
                                                max: 1
                                            });
                                            clog.on("collect", () => {
                                                channelc.send(`Responda com suas palavras o que é **POWER GAMING** e **cite um exemplo**`).then(async msg2 => {
                                                    let power = msg.channel.createMessageCollector(m => m.author.id === message.author.id, {
                                                        max: 1
                                                    });
                                                    power.on("collect", () => {
                                                        channelc.send(`Responda com suas palavras o que é **META GAMING** e **cite um exemplo**`).then(async msg2 => {
                                                            let meta = msg.channel.createMessageCollector(m => m.author.id === message.author.id, {
                                                                max: 1
                                                            });
                                                            meta.on("collect", () => {
                                                                channelc.send(`Conte-nos um pouco da história do seu personagem. Escreva um resumo.`).then(async msg2 => {
                                                                    let historia = msg.channel.createMessageCollector(m => m.author.id === message.author.id, {
                                                                        max: 1
                                                                    });
                                                                    historia.on("collect", () => {
                                                                        channelc.send(`Parabéns, sua whitelist foi enviada !\n Boa sorte !`).then(async msg2 => {
                                                                            var embed = new Discord.MessageEmbed()
                                                                            .setTitle(`Whitelist de ${message.author.username}`)
                                                                            .setDescription(`Novo formulario recebido ✅\n\nDiscord: **<@${message.author.id}>**\nNome do personagem: **${nome.collected.first().content}**\nIdade: **${idade.collected.first().content}**\n\nResposta sobre **VDM**: ${vdm.collected.first().content}\n\nResposta sobre **RDM**: ${rdm.collected.first().content}\n\nResposta sobre **Combat Loggin**: ${clog.collected.first().content}\n\nResposta sobre **Power Gaming**: ${power.collected.first().content}\n\nResposta sobre **Meta Gaming**: ${meta.collected.first().content}\n\n**História do personagem:** ${historia.collected.first().content}`)
                                                                            .setColor(0xFFFF00)
                                                                            .setTimestamp(new Date())
                                                                            .setThumbnail('https://imgur.com/MQdJDq4.png')
                                                                            bot.channels.cache.get("ID DA SALA").send(embed); 
                                                                            channelc.delete(1200)
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                
                                                })
                                            })
                        
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
    name: "wl"
}