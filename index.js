const cheerio = require('cheerio');
const Discord = require("discord.js")
const rp = require('request-promise');
const config = require("./config.json");
const fs = require("fs");
const request = require("request");
const bot = new Discord.Client();

bot.commands = new Discord.Collection();

fs.readdir("./comandos/", (err, files) => {
    if (err) console.error(err);

    let arquivojs = files.filter(f => f.split(".").pop() == "js");
    arquivojs.forEach((f, i) => {
        let props = require(`./comandos/${f}`);
        console.log(`O comando ${f} foi carregado com Sucessoo.`)
        bot.commands.set(props.help.name, props);
    });
});


        bot.on("ready", () => {
                console.log(`After Life RP\nServidores:${bot.guilds.cache.size}\nUsuários:${bot.users.cache.size}\nEmojis:${bot.emojis.cache.size}`);
            bot.user.setPresence({

                game: {
                    name: 'afterliferp.com.br',
                    type: 0
                }
            });
        });

        bot.on("message", message => {

            if(message.content.startsWith('al!addwl')) { //nome do comando
                const mysql = require('mysql'); 
                //Entrando na mysql
                const connection = mysql.createConnection({ //Info da database, para conectar
                    host: 'IP DO DB',
                    user: 'root',
                    password: 'senhaDB',
                    database: 'nomeDB'
                });
                connection.connect((err) => {
                });
                if(!message.guild.member(message.author.id).hasPermission("BAN_MEMBERS")) return message.channel.send({ //Só é liberado o comando caso a pessoa tenha a permissão de banir
                    embed:{title: 'Você não tem permissão para usar este comando!',color: 0xFFFF00}
                  })
            
                const args = message.content.trim().split(/ +/g);
        
                const sayMessage = args.slice(1).join(" ");
        
                  setInterval(function () {
                    connection.query('SELECT 1');
                  }, 5000);
              
                
                    connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${sayMessage}'`, (err, rows) => { //atualizando a whitelist do servidor
                        var embed = new Discord.MessageEmbed()
                        .setTitle("After Life RP | WHITELIST ")
                        .setDescription(`O STAFF - **${message.author.username}** adicionou a WL do **ID ${sayMessage}**`)
                        .setColor(0x00DD5E)
                        .setTimestamp(new Date())
                        .setThumbnail('https://image.flaticon.com/icons/png/512/2550/2550322.png')
                        bot.channels.cache.get("750147769649332315").send(embed);             
                  })
              
            }
            })
          bot.on("message", message => {
                if(message.content.startsWith('al!remwl')) { //nome do comando
                    const mysql = require('mysql'); 
                    //Entrando na mysql
                    const connection = mysql.createConnection({ //Info da database, para conectar
                        host: '189.1.173.226',
                        user: 'root',
                        password: 'ClOgSgOf4X23ahWX',
                        database: 'vrp'
                    });
                    connection.connect((err) => {
                    });
                    if(!message.guild.member(message.author.id).hasPermission("BAN_MEMBERS")) return message.channel.send({ //Só é liberado o comando caso a pessoa tenha a permissão de banir
                        embed:{title: 'Você não tem permissão para usar este comando!',color: 0xFFFF00}
                      })
                
                    const args = message.content.trim().split(/ +/g);
            
                    const sayMessage = args.slice(1).join(" ");
            
                      setInterval(function () {
                        connection.query('SELECT 1');
                      }, 5000);
                  
                    
                        connection.query(`UPDATE vrp_users SET whitelisted = '0' WHERE id = '${sayMessage}'`, (err, rows) => { //atualizando a whitelist do servidor
                        var embed = new Discord.MessageEmbed()
                            .setTitle("After Life RP | WHITELIST")
                            .setDescription(`O STAFF - **${message.author.username}** tirou a WL do **ID ${sayMessage}**`)
                            .setColor(0xFF1919)
                            .setTimestamp(new Date())
                            .setThumbnail('https://image.flaticon.com/icons/png/512/1828/1828595.png')
                            bot.channels.cache.get("ID DA SALA").send(embed); 
                      })
                  
                }
              })
            bot.on("message", message => {
                if(message.content.startsWith('al!ban')) { //nome do comando
                    const mysql = require('mysql'); 
                    //Entrando na mysql
                    const connection = mysql.createConnection({ //Info da database, para conectar
                      host: 'IP DO DB',
                      user: 'root',
                      password: 'senhaDB',
                      database: 'nomeDB'
                    });
                    connection.connect((err) => {
                    });

                    if(!message.guild.member(message.author.id).hasPermission("BAN_MEMBERS")) return message.channel.send({ //Só é liberado o comando caso a pessoa tenha a permissão de banir
                        embed:{title: 'Você não tem permissão para usar este comando!',color: 0xFFFF00}
                      })
                
                    const args = message.content.trim().split(/ +/g);
            
                    const sayMessage = args.slice(1).join(" ");
            
                      setInterval(function () {
                        connection.query('SELECT 1');
                      }, 5000);
                  
                    
                        connection.query(`UPDATE vrp_users SET banned = '1' WHERE id = '${sayMessage}'`, (err, rows) => { //atualizando a whitelist do servidor
                        var embed = new Discord.MessageEmbed()
                        .setTitle("After Life RP | BAN ")
                        .setDescription(`❌ O ID **${sayMessage}** foi **BANIDO** pelo STAFF - **${message.author.username}**`)
                        .setColor(0xFF1919)
                        .setTimestamp(new Date())
                        .setThumbnail('https://www.colourbox.com/preview/8618233-fraud-stamp.jpg')
                        bot.channels.cache.get("ID DA SALA").send(embed); 
                      })
                  
                }
                })
                bot.on("message", message => {
                    if(message.content.startsWith('al!remban')) { //nome do comando
                        const mysql = require('mysql'); 
                        //Entrando na mysql
                        const connection = mysql.createConnection({ //Info da database, para conectar
                          host: 'IP DO DB',
                          user: 'root',
                          password: 'senhaDB',
                          database: 'nomeDB'
                        });
                        connection.connect((err) => {
                        });
    
                        if(!message.guild.member(message.author.id).hasPermission("BAN_MEMBERS")) return message.channel.send({ //Só é liberado o comando caso a pessoa tenha a permissão de banir
                            embed:{title: 'Você não tem permissão para usar este comando!',color: 0xFFFF00}
                          })
                    
                        const args = message.content.trim().split(/ +/g);
                
                        const sayMessage = args.slice(1).join(" ");
                
                          setInterval(function () {
                            connection.query('SELECT 1');
                          }, 5000);
                      
                        
                            connection.query(`UPDATE vrp_users SET banned = '0' WHERE id = '${sayMessage}'`, (err, rows) => { //atualizando a whitelist do servidor
                            var embed = new Discord.MessageEmbed()
                            .setTitle("After Life RP | BAN ")
                            .setDescription(`O STAFF - **${message.author.username}** tirou o ban do ID **${sayMessage}**`)
                            .setColor(0x00DD5E)
                            .setTimestamp(new Date())
                            .setThumbnail('https://www.colourbox.com/preview/8618233-fraud-stamp.jpg')
                            bot.channels.cache.get("ID DA SALA").send(embed); 
                          })
                      
                    }
                    })
bot.on('message', message => {
    if (message.content.startsWith("al!reprovar")) {
      message.delete({timeout: 8});
        const embed = {
            "description": `❌ Infelizmente você foi **reprovado**, mas não fique triste\nvocê pode refazer a **white-list** `,
            "color": 16718105
        };
        let userid = message.mentions.users.first();
        userid.send({ embed })
    }
})

bot.on('message', message => {
    if (message.content.startsWith("al!aprovar")) {
        message.delete({timeout: 8});
        var embed = new Discord.MessageEmbed()
        .setTitle("After Life RP | Aprovado ")
        .setDescription(`Você foi aprovado na **whitelist** com sucesso\n pelo STAFF **${message.author.username}!**\n\nVá na sala <#744439636801355786>, pegue seu ID e mande na sala: <#740633265601511524>.\n\n O Mais importante de tudo, leia as regras de nossa cidade ! http://www.afterliferp.com.br/regras.html`)
        .setColor(0x00DD5E)
        .setTimestamp(new Date())
        .setThumbnail('http://queropassaremconcursos.com.br/wp-content/uploads/2016/07/aprovado-concurso-TJ-MG.png')

        let userid = message.mentions.users.first();
        userid.send({ embed })
        
        let role = message.guild.roles.cache.find(r => r.name === "✅Whitelist");
        let member = message.mentions.members.first();
        member.roles.add(role).catch(console.error);
    }
});
bot.on('message', message => {
  if (message.content.startsWith("!sorteio")) {
    message.delete({timeout: 5});
    const embed = {
        "description": `✅ Você está participando do sorteio, boa sorte ! `,
        "color": 628480
    };
    message.author.send({ embed })
      var embede = new Discord.MessageEmbed()
      .setTitle(`@${message.author.username} entrou no sorteio`)
      .setColor(0xFFFF00)
      .setTimestamp(new Date())
      .setThumbnail('https://i.imgur.com/9meji0I.png')
    bot.channels.cache.get("ID DA SALA").send(embede);
  }
})

bot.on("message", async message => {

    if (message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    if (!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if (cmd) cmd.run(bot, message, args);

});

   bot.login(config.token); 