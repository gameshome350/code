const Discord = require('discord.js');
const moment = require('moment');
const client = new Discord.Client();
const giphy = require('giphy-api')();
const fs = require("fs");
const hastebins = require('hastebin-gen');
var Canvas = require('canvas');
var jimp = require('jimp');
const prefix = "#";
const adminprefix = "#";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`star Bot- Script By : n3k4a `);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers ' Script By : n3k4a  Codes ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`#help-js | #help2 | #تقديم `,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
 
});

client.on("message", async message => {
     if(message.content.startsWith(prefix + "hastebin")){
 let content = '';
             let fillter = m => m.author.id === message.author.id
             await message.channel.send(" hastebin اكتب الكود الان للرفع علي ").then(e => {
     message.channel.awaitMessages(fillter, { time: 60000, max: 1 })
     .then(co => {
       content = co.first().content;
        co.first().delete();
hastebin(content).then(r => {
    e.edit(`Hastebin Link ${r}`);
}).catch(console.error);
     })
             })
     }
});

// Nomsy Paste 
const h = require('nomsy-paste');
client.on("message", async message => {
     if(message.content.startsWith(prefix + "nomsy")){
 let content = '';
             let fillter = m => m.author.id === message.author.id
             await message.channel.send(" nomsy اكتب الكود الان للرفع علي ").then(e => {
     message.channel.awaitMessages(fillter, { time: 60000, max: 1 })
     .then(co => {
       content = co.first().content;
        co.first().delete();
h(content, 'js').then(res => {
    e.edit(`Nomsy-Paste Link ${res}`);
}).catch(console.error);
     })
             })
     }
     });
       
// PasteBin
var pbin = require('pbin-guest');
       client.on("message", async message => {
     if(message.content.startsWith(prefix + "pastebin")){
 let content = '';
       let title = '';
             let fillter = m => m.author.id === message.author.id
             await message.channel.send(" pastebin اكتب الكود الان للرفع علي ").then(e => {
     message.channel.awaitMessages(fillter, { time: 60000, max: 1 })
     .then(co => {
       title = co.first().content;
        co.first().delete();
        e.edit(`اكتب الكود ناو`)
    
       message.channel.awaitMessages(fillter, { time: 60000, max: 1 })
       .then(col=> {
         content = col.first().content;
          col.first().delete();
pbin.paste({title: title, code: content}, '870d2b8b253779b0827c7512b2fe6c51', function(link, err){
    if(err){
        e.edit(err)
    }
    e.edit(link)
});
     })
     })
             })
     }
     });

client.on("message", message => {
  let prefix = "#";
  if (!(message.author.bot) && message.channel.type == "text")
    if (message.content.startsWith(`${prefix}getScreenShareLink`))
      if (message.member.voiceChannel) message.channel.send(`https://discordapp.com/channels/${message.guild.id}/${message.member.voiceChannel.id}`);
      else message.channel.send(`**يجب عليك ان تكون في الروم الذي تريد جلب رابط مشاركة بالفيديو خاص به**`);
});

client.on('message', msg => {
	var  prefix = "#";
 if (msg.content.startsWith(prefix + 'cal')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('Specify a equation, please.');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`Error: ${err}`);
    }
    
    const embed = new Discord.RichEmbed()
    .addField("**Input**: ",`**${question}**`, true)
    .addField("**Output**: ",`**${answer}**`, true)
    msg.channel.send(embed)
    }
};
});


client.on('message',async message => {
  if(message.author.bot || message.channel.type === 'dm') return;
  if(!message.content.startsWith(prefix)) return;
  let cmd = message.content.split(" ")[0].substring(prefix.length);
  let args = message.content.split(" ").slice(1);
  
  if(cmd === 'package') {
    let registry = `http://registry.npmjs.com/`;
    let fetch = require('node-fetch');
    if(!args[0]) return message.reply(`- Please Type the package name first`);
    
    fetch(`${registry}${args[0]}`)
    .then(res => res.json())
    .then(json => {
      let version = json["dist-tags"].latest;
      let name = json.name;
      let packagejson = require('./package.json');
      
      packagejson["dependencies"][name] = version;
      if(!RichEmbed) {
        let { RichEmbed } = require('discord.js');
      }
      let i = new RichEmbed();
      i.setColor("#36393e");
      i.setThumbnail(message.author.avatarURL);
      i.setDescription(`\`\`\`json\n${JSON.stringify(packagejson, null, 4)}\`\`\``);
      
      message.channel.send(i);
    })
    .catch(e => message.reply(`Couldn't find the package`));
  }
});

client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
 let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'pbc') {
        if (!args[1]) {
    message.channel.send(":white_check_mark: ***pbc <message>***");
    return;
    }
        message.guild.members.forEach(member => {
      if(!message.member.hasPermission('ADMINISTRATOR'))  return;
      message.react("✅");
            const w = ['./1.png',
                       './2.png',
                       './3.png',
                       './4.png',
                       './5.png',
                       './6.png',
                       './7.png',];
            let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
            ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
 
});
 let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                        ctx.font = '17px Arial';
                              ctx.fontSize = '13px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
              ctx.fillText(`${args} ` , 200, 100);
member.sendFile(canvas.toBuffer());
});
});
});
}
});


// Toxic Codes,// Toxic Codes,// Toxic Codes
client.on('message', async message => {
    var command = message.content.toLowerCase().split(" ")[0];
    var prefix = '#';// Toxic Codes
    var name = '';// Toxic Codes
    var age = '';// Toxic Codes
    var fromwhere = '';// Toxic Codes
    var fa2dh = '';// Toxic Codes
    var filter = m => m.author.id === message.author.id;// Toxic Codes
    var subChannel = message.guild.channels.find(c => c.name=== '✽-submissions');// Toxic Codes
   
    if(command == prefix + 'تقديم') {// Toxic Codes
        if(message.author.bot) return;
        if(message.channel.type === 'dm') return;
 
        var modRole = message.guild.roles.find(r => r.name === '• Omni Support.');// Toxic Codes
       
        if(message.guild.member(message.author).roles.has(modRole.id)) return message.channel.send(':x: | معك الرتبة');// Toxic Codes
		if(!subChannel) return message.channel.send(':x: | يجب ان يتوفر روم اسمه `✽-التقديمات`');// Toxic Codes
       
        message.channel.send(':timer: | **اكتب اسمك الحقيقي الان من فضلك**').then(msgS => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                name = collected.first().content;
                collected.first().delete();
                msgS.edit(':timer: | **من فضلك اكتب عمرك الان**').then(msgS => {
                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                        age = collected.first().content;
                        collected.first().delete();
                        msgS.edit(':timer: | **من فضلك اكتب من اي بلد انت**').then(msgS => {
                            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                fromwhere = collected.first().content;
                                collected.first().delete();
                                msgS.edit(':timer: | **من فضلك اكتب سبب تقديمك على الرتبة والمهارات اللتي لديك لتقديمها**').then(msgS => {
                                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                        fa2dh = collected.first().content;
                                        collected.first().delete();
                                       
                                        let embedS = new Discord.RichEmbed()
                                        .setAuthor(message.author.tag, message.author.avatarURL)
                                        .setThumbnail(message.author.avatarURL)
                                        .setDescription('**\n:no_entry: هل انت متأكد انك تريد التقديم؟**')
                                        .setColor('GREEN')
                                        .addField('الاسم', name, true)
                                        .addField('العمر', age, true)
                                        .addField('من وين', fromwhere, true)
                                        .addField('المهارات وسبب التقديم على الرتبة', fa2dh, true)
                                        .setTimestamp()
                                        .setFooter(message.guild.name, message.guild.iconURL)
                                       
                                        msgS.delete();
                                        message.channel.send(embedS).then(msgS => {
                                            msgS.react('✅').then(() => msgS.react('❎'))
                                           
                                            let yesSure = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                                            let no = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                                           
                                            let yesSend = msgS.createReactionCollector(yesSure);
                                            let dontSend = msgS.createReactionCollector(no);
                                           
                                            yesSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':white_check_mark: | تم تقديم طلبك بنجاح انتظر النتيجة في روم support-accept').then(msg => msg.delete(5000));
                                               
                                                let subMsg = new Discord.RichEmbed()
                                                .setAuthor(message.author.tag, message.author.avatarURL)
                                                .setColor('GREEN')
                                                .setThumbnail(message.author.avatarURL)
                                                .addField('الاسم', name)
                                                .addField('العمر', age)
                                                .addField('من وين', fromwhere)
                                                .addField('لماذا يريد التقديم', fa2dh)
                                                .addField('حسابه', message.author)
                                                .addField('ايدي حسابه', message.author.id, true)
                                               
                                                subChannel.send(subMsg).then(msgS => {
                                                    msgS.react('✅').then(() => msgS.react('❎'))
                                                   
                                                    let accept = (reaction, user) => reaction.emoji.name === '✅'  && user.id === ('462006869834203159', '462006869834203159');
                                                    let noAccept = (reaction, user) => reaction.emoji.name === '❎' && user.id === ('462006869834203159', '462006869834203159');

                                                    let acceptRe = msgS.createReactionCollector(accept);
                                                    let noAcceptRe = msgS.createReactionCollector(noAccept);
                                                   
                                                    acceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:white_check_mark: | تم قبولك بسيرفر **${message.guild.name}**`);
                                                        message.guild.member(message.author).addRole(modRole.id);
                                                        message.guild.channels.find(r => r.name === '✽-القبول-الرفض').send(`:white_check_mark: | تم قبولك [ <@${message.author.id}> ]`);
                                                    }).catch();
                                                    noAcceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:x: | تم رفضك بسيرفر **${message.guild.name}**`);
                                                        message.guild.channels.find(r => r.name === '✽-القبول-الرفض').send(`:x: | تم رفضك [ <@${message.author.id}> ]`);
                                                    }).catch();
                                                })
                                            });// Toxic Codes
                                            dontSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':x: | تم الغاء تقديمك');// Toxic Codes
                                            });
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
});

client.on("message", msg => {
    if(msg.author.bot) return;
if(!msg.guild.member(msg.author).hasPermission("MANAGE_ROLES")) return;
    if(msg.channel.type === 'dm') return;
  let prefix = '#'; //البرفكس
  let msgarray = msg.content.split(" ");
  let cmd = msgarray[0];
  let args = msgarray.slice(1);
  if(cmd === `${prefix}قبول`){
   
   
 
    let aUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if(!aUser) return msg.channel.send("Couldn't find users.");
 
 
     
     
      let ac = msg.guild.channels.find(`name`,"✽-القبول-الرفض");
      if(!ac) return msg.channel.send("Couldn't find `اسم الروم` channel. ");
      ac.send(`** تم بنجاح قبولك    ${aUser}**`)
 
      msg.delete().catch(O_o=>{});
      var role = msg.guild.roles.find(`name`, '• Omni Support.');
      var role2 = msg.guild.roles.find(`name`, '● Heroku Master.');
      var role3 = msg.guild.roles.find(`name`, '● Github Master.');
      if(!role) return msg.guild.channel.send("Could't find `اسم رتبت السبورت` role.");
      aUser.addRole(role);
      aUser.addRole(role2);
      aUser.addRole(role3);
     
          return;
      }
      });
 
client.on("message", msg => {
    if(msg.author.bot) return;
if(!msg.guild.member(msg.author).hasPermission("MANAGE_ROLES")) return;
    if(msg.channel.type === 'dm') return;
  let prefix = '#'; //البرفكس
  let msgarray = msg.content.split(" ");
  let cmd = msgarray[0];
  let args = msgarray.slice(1);
  if(cmd === `${prefix}رفض`){
   
   
 
    let aUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if(!aUser) return msg.channel.send("Couldn't find users.");
 
 
     
     
      let ac = msg.guild.channels.find(`name`,"✽-القبول-الرفض");
      if(!ac) return msg.channel.send("Couldn't find `اسم الروم` channel. ");
      ac.send(`** تم للاسف رفضك${aUser}**`)
 
      msg.delete().catch(O_o=>{});
     
     
          return;
      }
      });
 
client.on("message", msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === 'dm') return;
if(!msg.guild.member(msg.author).hasPermission("MANAGE_ROLES")) return;
  let prefix = '#'; //البرفكس
  let msgarray = msg.content.split(" ");
  let cmd = msgarray[0];
  let args = msgarray.slice(1);
  if(cmd === `${prefix}سحب`){
   
   
 
    let aUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if(!aUser) return msg.channel.send("Couldn't find users.");
 
 
     
     
     
 
      msg.delete().catch(O_o=>{});
      var role = msg.guild.roles.find(`name`, '• Omni Support.');
      var role2 = msg.guild.roles.find(`name`, '● Heroku Master.');
      var role3 = msg.guild.roles.find(`name`, '● Github Master.');
      if(!role) return msg.guild.channel.send("Could't find `اسم رتبت السبورت` role.");
      aUser.removeRole(role);
      aUser.removeRole(role2);
      aUser.removeRole(role3);
     
          return;
      }
      });

const developers = ["462006869834203159"]//Toxic Codes
client.on('message', message => {//Toxic Codes
    var argresult = message.content.split(` `).slice(1).join(' ');//Toxic Codes
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {//Toxic Codes
    message.guild.leave();   //Toxic Codes
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});//Toxic Codes
      message.channel.send(`**✅   ${argresult}**`)//Toxic Codes
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)//Toxic Codes
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/zero");
      message.channel.send(`**✅**`)//Toxic Codes
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
  if (message.content.startsWith(adminprefix + 'setprefix')) {//Toxic Codes
  client.user.setPrefix(argresult).then
      message.channel.send(`Changing Prefix ..**${argresult}** `)//Toxic Codes
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {//Toxic Codes
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);//Toxic Codes
}
});//Toxic Codes


client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === '#sr') {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
  })

client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "● members.");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})


const hastebin = require('hastebin-gen');
client.on('message', message => {
var PREFIX = '#';
    if(message.content.startsWith(PREFIX + 'dis')) {
            var args = message.content.split(' ').slice(1).join(' ');
}
      var array = [];
      var i = 0;
      if(args){
client.users.filter(u => u.discriminator == args).map(u => {
    if(i > 4){
     return;
    }
    i = i + 1;

   array.push(`${u.tag}`);
});
}
hastebin(`${array.slice(0, 30).join('\n')}`, 'txt').then(l => {
    message.channel.send(`${l}`);
}).catch(console.error);
});
client.on('message' , message => {
var PREFIX = '#';
if(message.content === `${PREFIX}dis         `         ) {
                      let array = [];
                      var i = 0;
client.users.filter(u => u.discriminator == message.author.discriminator).map(u => {
    if(i > 4){
     return;
    }
    i = i + 1;
   array.push(`${u.tag}`);
});
hastebin(`${array.slice(0, 30).join('\n')}`, 'txt').then(l => {
    message.channel.send(`${l}`);
}).catch(console.error);

        }
});


client.on('message', rw => {
  if (rw.content.startsWith('#vb')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
let men = rw.mentions.users.first()
let mas = rw.author
if(!men) return rw.channel.send('``');
rw.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          CONNECT: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
YOU CANT JOIN THE VOICE ROOM
BANNER : <@${rw.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL)
.setDescription(`          <@${men.id}>
BANNED
BANNER : <@${rw.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
rw.channel.sendEmbed(Embed11).then(rw => {rw.delete(10000)})
    }
})
 
 //فكه
client.on('message', rw => {
  if (rw.content.startsWith('#uvb')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
 let men = rw.mentions.users.first()
 let mas = rw.author
 if(!men) return rw.channel.send('`MANTION THE MEMBER `');
 rw.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         CONNECT: true
 })
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
 Welcome Back
Back With : <@${rw.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL)
.setDescription(`          <@${men.id}>
GO FOR VOICE NOW
With : <@${rw.author.id}>
`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
rw.channel.sendEmbed(Embed11).then(rw => {rw.delete(15000)})
    }
}) 

var stopReacord = true;
var reactionRoles = [];
var definedReactionRole = null;
 
client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    if (command == "autoc") {
      if(!message.channel.guild) return message.reply(`**this ~~command~~ __for servers only__**`);
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("sorry you can't do this");
      if(!args[0] || args[1]) return message.channel.send(`\`\`\`${prefix}autoC <role-name>\`\`\``);
      var role = message.guild.roles.find( role => { return role.name == args[0] });
      if(!role) return message.channel.send(`no role with name ${definedRoleName} found, make sure you entered correct name`);
      if(definedReactionRole != null  || !stopReacord) return message.channel.send("another reaction role request is running");
      message.channel.send(`now go and add reaction in the message you want for role ${role.name}`);
      definedReactionRole = role;
      stopReacord = false;
    }    
})
client.on('raw', raw => {
  if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(raw.t)) return;
  var channel = client.channels.get(raw.d.channel_id);
  if (channel.messages.has(raw.d.message_id)) return;
  channel.fetchMessage(raw.d.message_id).then(message => {
    var reaction = message.reactions.get( (raw.d.emoji.id ? `${raw.d.emoji.name}:${raw.d.emoji.id}` : raw.d.emoji.name) );
    if (raw.t === 'MESSAGE_REACTION_ADD') return client.emit('messageReactionAdd', reaction, client.users.get(raw.d.user_id));
    if (raw.t === 'MESSAGE_REACTION_REMOVE') return client.emit('messageReactionRemove', reaction, client.users.get(raw.d.user_id));
  });
});
client.on('messageReactionAdd', (reaction, user) => {
    if(user.id == client.user.id) return;
    if(!stopReacord) {
      var done = false;
      reactionRoles[reaction.message.id] = { role: definedReactionRole, message_id: reaction.message.id, emoji: reaction.emoji};
      stopReacord =  true;
      definedReactionRole = null;
      reaction.message.react(reaction.emoji.name)
      .catch(err => {done = true; reaction.message.channel.send(`sorry i can't use this emoji but the reaction role done! anyone react will get the role!`)})
      if(done) reaction.remove(user);
    } else {
      var request = reactionRoles[reaction.message.id];
      if(!request) return;
      if(request.emoji.name != reaction.emoji.name) return reaction.remove(user);
      reaction.message.guild.members.get(user.id).addRole(request.role);
    }
})

client.on('messageReactionRemove', (reaction, user) => {
  if(user.id == client.user.id) return;
  if(!stopReacord) return;
  let request = reactionRoles[reaction.message.id];
  if(!request) return;
  reaction.message.guild.members.get(user.id).removeRole(request.role);
});
 
   client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("⦁`All types of codes in Toxic Codes Server 💬`⦁",' ‎ ')
  .addField("❧  **#help-js-source    ➺      ⦁ قسم السورس الأساسي** ⦁",' ‎ ')
   .addField("❧  **#help-js-admin     ➺      ⦁ قسم الأكواد الإدارية** ⦁",' ‎ ')
    .addField("❧  **#help-js-general   ➺      ⦁ قسم الأكواد العامة*** ⦁",' ‎ ')
     .addField("❧  **#help-js-welcome   ➺      ⦁ قسم أكواد الترحيب** ⦁",' ‎ ')
	.addField("❧  **#help-js-help      ➺      ⦁ قسم أكواد الهلب** ⦁",' ‎ ')
            .addField("❧  **#help-js-bc        ➺      ⦁ قسم أكواد البرودكاست** ⦁",' ‎ ')
                .addField("❧  **#help-js-games        ➺      ⦁ قسم اكواد الالعاب** ⦁",' ‎ ')
 .setFooter('Toxic Codes')


   message.channel.send({embed});


    }
});
  
  
     client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-source") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("⦁`All types of codes in Toxic Codes Server 💬`⦁",' ‎ ')
    .addField("**#help-js-source-1  ➺      ⦁ السورس الأساسي**⦁",' ‎ ')
     .addField("**#help-js-source-2  ➺      ⦁ السورس الأساسي مع الستريمنق ومعلومات البوت** ⦁",' ‎ ')
      .addField("**#help-js-source-3  ➺      ⦁ السورس الأساسي مع الستريمنق ومعلومات البوت** ⦁",' ‎ ')
       .addField("**#help-js-source-4  ➺      ⦁ السورس الأساسي مع الستريمنق ومعلومات البوت** ⦁",' ‎ ')
         .addField("**#help-js-source-5  ➺      ⦁ السورس الأساسي من العادي** ⦁",' ‎ ')
	 
 .setFooter('Toxic Codes')


   message.channel.send({embed});


    }
});
  
  
  

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-5") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود السورس الأساسي**
 https://pastebin.com/ADZCcnCv
`);

    }
});  
  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-1") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود السورس الأساسي**
 https://pastebin.com/xGu8E5jA
`);

    }
});  
  
  client.on("message", message => {

            if (message.content.startsWith(prefix + "bc4")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
  
  
    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-2") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **السورس الأساسي مع الستريمنق ومعلومات البوت**
 https://pastebin.com/rJCgs6he
`);

    }
});  
  
  
  
  
  
      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-3") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **السورس الأساسي مع الواتشينق**
 https://pastebin.com/pYgG5HRi
`);

    }
});  
  
  
  
        client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-4") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **السورس الاساسي مع البنق**
 https://pastebin.com/1pX8Zdrw
`);

    }
});  
  
  
  
  
  
       client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-admin") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

 .addField("⦁`All types of codes in Toxic Codes Server 💬`⦁",' ‎ ')
 .addField("**#help-js-admin-1  ➺      ⦁ كود الباند**⦁",' ‎ ')
 .addField("**#help-js-admin-2  ➺      ⦁ كود الكيك** ⦁",' ‎ ')
 .addField("**#help-js-admin-3  ➺      ⦁ كود مسح الشات مع عدد وشبيه بالبروبوت** ⦁",' ‎ ')
 .addField("**#help-js-admin-4  ➺      ⦁ كود فتح وتقفيل الشات** ⦁",' ‎ ')
 .addField("**#help-js-admin-5  ➺      ⦁  كود رابط يرسله خاص ل 100شخص لمدة 24 ساعه** ⦁",' ‎ ')
 .addField("**#help-js-admin-6  ➺      ⦁  كود لانشاء شات كتابي** ⦁",' ‎ ')	  
 .addField("**#help-js-admin-7  ➺      ⦁  كود لانشاء روم صوتي** ⦁",' ‎ ')
 .addField("**#help-js-admin-8  ➺      ⦁  invite : كود دعوه البوت مثال ** ⦁",' ‎ ')	  
     .addField("**#help-js-admin-9  ➺ ⦁  كود الاوتو رول التفعيل داخل السيرفر ** ⦁",' ‎ ')
     .addField("**#help-js-admin-10  ➺ ⦁ كود الميوت وفكه ** ⦁",' ‎ ')
     .addField("**#help-js-admin-11  ➺ ⦁ كود منع الجحفله  ** ⦁",' ‎ ')
     .addField("**#help-js-admin-12  ➺ ⦁ كود منع بوتات النشر ** ⦁",' ‎ ')
     .addField("**#help-js-admin-13  ➺ ⦁ **كود ميوت وديفين في نفص الوقت ** ⦁",' ‎ ')
     .addField("**#help-js-admin-14 ➺ ⦁ كود باند صوتي  ** ⦁",' ‎ ')
     .addField("**#help-js-admin-15 ➺ ⦁ كود التفعيل بي الريكشن ** ⦁",' ‎ ')
	  
	  
 .setFooter('Toxic Codes')


   message.channel.send({embed});


    }
});
  
  
  
          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-1") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود الباند**
 https://pastebin.com/YZAXKYUB
`);

    }
});  
  
  
  
  
            client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-2") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود الكيك**
 https://pastebin.com/0cNVLm1a
`);

    }
});  
  
  

              client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-3") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود مسح الشات ( الكلير ) نفس سبيد بوت**
 https://pastebin.com/QERKkTtk
`);

    }
});  
  
  
  
  
  
                client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-4") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود فتح وتقفيل الشات**
 https://pastebin.com/gb4me9bS
`);

    }
});  


                  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-5") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ ** كود رابط يرسله خاص ل 100شخص لمدة 24 ساعه**
 https://pastebin.com/Xe5kzVUw
`);

    }
});
  
         client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-6") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ ** كود لانشاء شات كتابي**
 https://pastebin.com/ChtbaGu2
`);

    }
});
  
           client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-7") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ ** كود لانشاء روم صوتي**
 https://pastebin.com/Y2SWEE6N
`);

    }
});



          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-8") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **invite : كود دعوه البوت مثال **
 https://pastebin.com/hP9VQpFR
`);

    }
});  


          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-9") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود الاوتو رول التفعيل داخل السيرفر **
 https://pastebin.com/7tVEa317
`);

    }
});  


          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-10") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود الميوت وفكه**
https://pastebin.com/Gx7kqqRs
`);

    }
});  

        client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-11") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود مضاد الجحفله**
https://pastebin.com/sRGHJynR
`);

    }
});  

      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-12") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود منع بوتات النشر**
https://pastebin.com/CwiL0GLQ
`);

    }
});  


      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-13") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود ميوت وديفين في نفص الوقت **
https://pastebin.com/vmTKSvgN
`);

    }
});  

      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-14") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود باند صوتي  **
https://pastebin.com/EcGhrAMJ
`);

    }
});  

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-15") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ ** كود التفعيل بي الريكشن **
https://pastebin.com/EcGhrAMJ
`);

    }
});
         client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-general") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

 .addField("⦁`All types of codes in Toxic Codes Server 💬`⦁",' ‎ ')
 .addField("**#help-js-general-1  ➺      ⦁ كود البنق **⦁",' ‎ ')
 .addField("**#help-js-general-2  ➺      ⦁ كود القرعة ** ⦁",' ‎ ')
 .addField("**#help-js-general-3  ➺      ⦁ كود الافتار  ** ⦁",' ‎ ')	  
 .addField("**#help-js-general-4  ➺      ⦁ كود معلومات السيرفر ** ⦁",' ‎ ')
 .addField("**#help-js-general-5  ➺      ⦁ كود المعلومات الشخصية** ⦁",' ‎ ')
 .addField("**#help-js-general-6  ➺      ⦁ كود كت تويت** ⦁",' ‎ ')	  
 .addField("**#help-js-general-7  ➺      ⦁ كود صراحه** ⦁",' ‎ ')	  
	  
	  
 .setFooter('Toxic Codes')

   message.channel.send({embed});


    }
});
  
  
  
  
  
  
                  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-1") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود البنق**
 https://pastebin.com/iCmTpWJX
`);

    }
});
  
  
  
  
                        client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-2") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود القرعة**
 https://pastebin.com/eZHv8NPC
`);

    }
});
  
  
  
  
  
                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-3") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود الافاتار**
 https://pastebin.com/aBzSWJxy
`);

    }
});
  
  
  
  
  
                      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-4") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود معلومات السيرفر**
 https://pastebin.com/Z082PXt3
`);

    }
});






                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-5") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود المعلومات الشخصية**
 https://pastebin.com/ZMhAPtSB
`);

    }
});


                client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-6") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود كت تويت**
 https://pastebin.com/fak2SQsm
`);

    }
});
  
  
  
  
                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-7") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود صراحه **
 https://pastebin.com/NC32yt0v
`);

    }
});
  





  
  
  
           client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-welcome") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("⦁`All types of codes in Toxic Codes Server 💬`⦁",' ‎ ')
  .addField("**#help-js-welcome-1  ➺      ⦁ كود ترحيب مع ذكر رقم العضو **⦁",' ‎ ')
   .addField("**#help-js-welcome-2  ➺      ⦁ كود الترحيب مع صورة ** ⦁",' ‎ ')
     .addField("**#help-js-welcome-3  ➺      ⦁ كود مغادرة العضو ** ⦁",' ‎ ')
	       .addField("**#help-js-welcome-4  ➺      ⦁ كود تم دعوته بواسطة ** ⦁",' ‎ ')

	 
		   
 .setFooter('Toxic Codes')


   message.channel.send({embed});

    }
});
  
  
  
  
                      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-welcome-1") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود ترحيب بصورة**
 https://paste.drhack.net/?ded81e2b02cab246#Oej+XdoRpbGnlTET2iH2zKdVCn+WFNCUatLLtOU1urs=
`);

    }
});
  
  
  
  
                        client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-welcome-2") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود الترحيب في الخاص مع رقم العضو**
 https://paste.drhack.net/?854e74d128b66da8#3menzqbk4bSRPItx7czUQhc1iuwjQRZTyaEVF6ZUktE=
`);

    }
});




                      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-welcome-3") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖**كود مغادرة العضو**
 https://pastebin.com/8Da43txR
`);

    }
});
  
  
  
                      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-welcome-4") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود تم دعوته بواسطة**
 https://pastebin.com/ihCR8nhW
`);

    }
});
  
  
  
             client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-help") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("⦁`All types of codes in Toxic Codes Server 💬`⦁",' ‎ ')
  .addField("**#help-js-help-1  ➺      ⦁ كود هلب مع امبد يرسل بنفس الشات **⦁",' ‎ ')
   .addField("**#help-js-help-2  ➺      ⦁ كود هلب مزخرف بدون امبد ويرسل عالخاص ** ⦁",' ‎ ')
		   
 .setFooter('Toxic Codes')


   message.channel.send({embed});

    }
});
  
  
  
  
                        client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-help-1") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود هلب مع امبد يرسل بالخاص**
 https://pastebin.com/ZC0FHb0c
`);

    }
});
  
  
  
                          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-help-2") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود هلب بدون امبد ويرسل عالخاص**
 https://pastebin.com/MuCMUQYc
`);

    }
});
  
  


  
               client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-bc") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("⦁`All types of codes in Toxic CodesServer 💬`⦁",' ‎ ')
  .addField("**#help-js-bc-1  ➺      ⦁ برودكاست + للكل + مطور **⦁",' ‎ ')
  .addField("**#help-js-bc-2  ➺      ⦁ برودكاست + للكل + غير مطور ** ⦁",' ‎ ')
  .addField("**#help-js-bc-3  ➺      ⦁ برودكاست + للأونلاين + مع منشن + غير مطور **⦁",' ‎ ')
  .addField("**#help-js-bc-4  ➺      ⦁ برودكاست + للكل + مع منشن + غير مطور ** ⦁",' ‎ ')	   
		   
 .setFooter('Toxic Codes')


   message.channel.send({embed});

    }
});
  
  
  
  
  
  
  
  
  
  
                              client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-bc-1") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **برودكاست + للكل **
 https://pastebin.com/n2SyjdwH
`);

    }
});



                            client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-bc-2") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **برودكاست + للكل + غير مطور**
 https://pastebin.com/n2SyjdwH
`);

    }
});




                            client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-bc-3") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ ** برودكاست + للأونلاين + مع منشن + غير مطور**
 https://pastebin.com/n2SyjdwH
`);

    }
});
  
  
  
  
                              client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-bc-4") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **برودكاست + للكل + مع منشن + غير مطور**
 https://pastebin.com/n2SyjdwH
`);

    }
});

  
client.on('message',message =>{
    if(message.content ==  "#top inv"){
message.guild.fetchInvites().then(i =>{
var invites = [];

i.forEach(inv =>{
    var [invs,i]=[{},null];
    
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
invites.push(`  لقد دعوت  :- (${inv.inviter}) =  (${invs[inv.code]}) \;`);

invites.push( `رابط الانفايت حق  :point_up::skin-tone-1::  ${inv.url} \;`);
});
  message.channel.send(invites.join(`\n`)+'\n\n**By @everyone:** '+message.author);
  
});

    }
});



client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)

      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())

      msg.channel.send({embed:embed});
    }
  });
	
	
	
	
	

      client.on('message', message => {
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`Toxic Codes`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       
});
		  
		  
		  client.on('message', message => {
    if (message.content.startsWith("#av")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
	

client.on('message', message => {
    if(message.content == '#member') {
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setImage(message.guild.iconURL)
    .addField(`حالة الأعضاء🔋`,'-',   true)
.addField(`💚 اونلاين:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}`,'-',   true)
.addField(`❤ مشغول:     ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`,'-',   true)
.addField(`💛 خامل:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}`,'-',   true)   
.addField(`🖤 اوفلاين:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size}`,'-',  true) 
.addField(`💙   الكل:  ${message.guild.memberCount}`,'-',   true)         
         message.channel.send({embed});

    }
  });





client.on('message', message => {
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc3")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

   client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help2") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("╔[❖════════════❖]╗",' ‎ ')
 .addField("      اوامر عامه      ",' ‎ ')
 .addField("  ╚[❖════════════❖]╝`⦁",' ‎ ')
   .addField("❖ #member ➾ معلومات الاعضاء ⦁",' ‎ ')
     .addField("❖ #av ➾ صورة حسابك ⦁",' ‎ ')
	 	   .addField("❖ #uptime ➾ مدة تشغيل البوت ⦁",' ‎ ')
		   	   .addField("❖ #id ➾ اي دي ⦁",' ‎ ')
		   	   .addField("❖ #inv ➾ رابط السيرفر ⦁",' ‎ ')
.addField("❖ #own ➾ مسؤول البوت⦁",' ‎ ')
.addField("❖ #top-inv ➾ اكثر شخص بالدعوات ⦁",' ‎ ')
.addField("❖ ❖ #ping ➾ عرض سرعه اتصال البوت ⦁",' ‎ ')
.addField("❖ ❖ #server ➾ معلومات عن السيرفر ⦁",' ‎ ')

 .setFooter('Toxic Codes')


   message.channel.send({embed});


    }
});


  client.on('message', message => {
if (message.content === prefix + 'help-eris') {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("╔[❖════════════❖]╗",' ‎ ')
 .addField("      تحت الصيانه     ",' ‎ ')
 .addField("  ╚[❖════════════❖]╝`⦁",' ‎ ')

 .setFooter('Toxic Codes')


   message.channel.send({embed});


    }
});

var guilds = {};

client.on('message',async message => {
 
  if(message.content.startsWith(prefix + "js")) {

if(!message.channel.guild) return message.reply(' ');

  let rank = message.guild.member(message.author).roles.find('name', '• Omni Support.', '● Support plus.');

  if (!rank) return message.channel.send('🛑 **| يجب ان تمتلك رتبة سبورت لأستخدام هذا الأمر.**');

  let jscodes = message.guild.channels.find(`name`, "❖-discord-js");

  if(!jscodes) return message.channel.send("❌لم اجد الروم الخاص بنشر الاكواد");

    let filter = m => m.author.id === message.author.id;

    let thisMessage;

    let thisFalse;

    message.channel.send('📝 **| من فضلك اكتب الكود الأن... ✏ **').then(msg => {



    message.channel.awaitMessages(filter, {

      max: 1,

      time: 90000,

      errors: ['time']

    })

    .then(collected => {

      collected.first().delete();

      thisMessage = collected.first().content;

      let boi;

      msg.edit('📜 **| من فضلك اكتب وصف الكود الأن... ✏ **').then(msg => {



          message.channel.awaitMessages(filter, {

            max: 1,

            time: 90000,

            errors: ['time']

          })

          .then(collected => {

            collected.first().delete();

            boi = collected.first().content;

            let boi2;

            msg.edit('🤵 **| من فضلك اكتب من صنع هذا الكود الأن... ✏ **').then(msg => {



              message.channel.awaitMessages(filter, {

                max: 1,

                time: 90000,

                errors: ['time']

              })

              .then(collected => {

                collected.first().delete();

              boi2 = collected.first().content;

      msg.edit('🛡 **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');

 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{

        max: 1,

        time: 90000,

        errors: ['time']

      })

      .then(collected => {

        if(collected.first().content === 'لا') {

          msg.delete();

          message.delete();

          thisFalse = false;

        }

        if(collected.first().content === 'نعم') {

          if(thisFalse === false) return;

          msg.edit('🕊 **| Done ✅, تم بنجاح نشر كودك في روم الاكواد**');

          collected.first().delete();

          jscodes.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**Toxic Codes© ⬇**
\`\`\`css
${thisMessage}\`\`\`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**وصف الكود**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الكود**: ${boi2}`);

        }

      }

  );

});

    });

  }

    );

  });

}

);

    })}});

client.on('message',async message => {
 
  if(message.content.startsWith(prefix + "html")) {

if(!message.channel.guild) return message.reply(' ');

  let rank = message.guild.member(message.author).roles.find('name', '• Omni Support.', '● Support plus.');

  if (!rank) return message.channel.send('🛑 **| يجب ان تمتلك رتبة سبورت لأستخدام هذا الأمر.**');

  let jscodes = message.guild.channels.find(`name`, "❖-discord-html");

  if(!jscodes) return message.channel.send("❌لم اجد الروم الخاص بنشر الاكواد");

    let filter = m => m.author.id === message.author.id;

    let thisMessage;

    let thisFalse;

    message.channel.send('📝 **| من فضلك اكتب الكود الأن... ✏ **').then(msg => {



    message.channel.awaitMessages(filter, {

      max: 1,

      time: 90000,

      errors: ['time']

    })

    .then(collected => {

      collected.first().delete();

      thisMessage = collected.first().content;

      let boi;

      msg.edit('📜 **| من فضلك اكتب وصف الكود الأن... ✏ **').then(msg => {



          message.channel.awaitMessages(filter, {

            max: 1,

            time: 90000,

            errors: ['time']

          })

          .then(collected => {

            collected.first().delete();

            boi = collected.first().content;

            let boi2;

            msg.edit('🤵 **| من فضلك اكتب من صنع هذا الكود الأن... ✏ **').then(msg => {



              message.channel.awaitMessages(filter, {

                max: 1,

                time: 90000,

                errors: ['time']

              })

              .then(collected => {

                collected.first().delete();

              boi2 = collected.first().content;

      msg.edit('🛡 **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');

 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{

        max: 1,

        time: 90000,

        errors: ['time']

      })

      .then(collected => {

        if(collected.first().content === 'لا') {

          msg.delete();

          message.delete();

          thisFalse = false;

        }

        if(collected.first().content === 'نعم') {

          if(thisFalse === false) return;

          msg.edit('🕊 **| Done ✅, تم بنجاح نشر كودك في روم الاكواد**');

          collected.first().delete();

          jscodes.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**Toxic Codes© ⬇**
\`\`\`css
${thisMessage}\`\`\`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**وصف الكود**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الكود**: ${boi2}`);

        }

      }

  );

});

    });

  }

    );

  });

}

);

    })}});



client.on('message', message => {
  if (message.author.bot) return;
   if (message.content  === prefix + "help-js-games") {
        const embed = new Discord.RichEmbed()


 .setColor('RANDOM')
.setTimestamp()

.addField("⦁`All types of codes in Toxic Codes Server 💬`⦁",' ‎ ')
.addField("**#help-js-games-1  ➺      ⦁ لعبة اسئلة فورت نايت**⦁",' ‎ ')
 .addField("**#help-js-games-2  ➺      ⦁ لعبة صراحة** ⦁",' ‎ ')
     .addField("**#help-js-games-3  ➺      ⦁ لعبة كت تويت** ⦁",' ‎ ')
       .addField("**#help-js-games-4  ➺      ⦁ لعبة لو خيروك** ⦁",' ‎ ')
       .addField("**#help-js-games-5  ➺      ⦁ لعبة مريم** ⦁",' ‎ ')
       .addField("**#help-js-games-6  ➺      ⦁ لعبة عقاب** ⦁",' ‎ ')
       .addField("**#help-js-games-7  ➺      ⦁ لعبة فكك تحتاج جيسون** ⦁",' ‎ ')
       .addField("**#help-js-games-8  ➺      ⦁ لعبة قرعة** ⦁",' ‎ ')
       .addField("**#help-js-games-9  ➺      ⦁ لعبة اكس او** ⦁",' ‎ ')
       .addField("**#help-js-games-10  ➺      ⦁ لعبة اسرع كتابة** ⦁",' ‎ ')
   .setFooter('Toxic Cods')


   message.channel.send({embed});


    }
});
   client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-games-1") {
		 message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود اسئلة لعبة فورت نايت**
 https://pastebin.com/ycDVzyup
`);

    }
});  

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-2") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
          

   


message.author.sendMessage(`
❖ **كود لعبة صراحة**
https://pastebin.com/sgtxADHu
`);

  }
}); 

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-3") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
          

   


message.author.sendMessage(`
❖ **كود لعبة كت تويت**
https://paste.drhack.net/?ea5251c741026c3d#B/AW3E7mlppg8obzbnEIGgbjSc6PRFHnDqBTeOk+svw=
`);

  }
}); 

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-4") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
          

   


message.author.sendMessage(`
❖ **كود لعبة لو خيروك**
https://paste.drhack.net/?eae21f05292515ca#Q0wYzgc1EWSI9aPafHGGTpKqLN9yypU02d/5BSnmp/M=
`);

  }
}); 

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-4") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
          

   


message.author.sendMessage(`
❖ **كود لعبة مريم**
https://pastebin.com/ELJPi6Ef
`);

  }
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-5") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
          

   


message.author.sendMessage(`
❖ **كود لعبة مريم **
https://pastebin.com/kuEXN67Z
`);

  }
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-6") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
          

   


message.author.sendMessage(`
❖ **كود لعبة عقاب**
https://pastebin.com/ELJPi6Ef
`);

  }
}); 

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-7") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
          

   


message.author.sendMessage(`
❖ **كود لعبة فكك**
https://pastebin.com/7xpL4KB4
`);

  }
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-8") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
          

   


message.author.sendMessage(`
❖ **كود قرعة**
https://pastebin.com/Rh2BLmZC
`);

  }
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-9") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
          

   


message.author.sendMessage(`
❖ **كود لعبة اكس او**
https://pastebin.com/ADDKWuse
`);

  }
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-10") {
   message.channel.send('**لقد تم ارسال الكود في الخاص :ok_hand: **');
          

   


message.author.sendMessage(`
❖ **كود لعبة اسرع كتابة**
https://pastebin.com/PfvYF1ak
`);

  }
});

client.on('message',async message => {
 
  if(message.content.startsWith(prefix + "py")) {

if(!message.channel.guild) return message.reply(' ');

  let rank = message.guild.member(message.author).roles.find('name', '• Omni Support.', '● Support plus.');

  if (!rank) return message.channel.send('🛑 **| يجب ان تمتلك رتبة سبورت لأستخدام هذا الأمر.**');

  let jscodes = message.guild.channels.find(`name`, "❖-discord-py");

  if(!jscodes) return message.channel.send("❌لم اجد الروم الخاص بنشر الاكواد");

    let filter = m => m.author.id === message.author.id;

    let thisMessage;

    let thisFalse;

    message.channel.send('📝 **| من فضلك اكتب الكود الأن... ✏ **').then(msg => {



    message.channel.awaitMessages(filter, {

      max: 1,

      time: 90000,

      errors: ['time']

    })

    .then(collected => {

      collected.first().delete();

      thisMessage = collected.first().content;

      let boi;

      msg.edit('📜 **| من فضلك اكتب وصف الكود الأن... ✏ **').then(msg => {



          message.channel.awaitMessages(filter, {

            max: 1,

            time: 90000,

            errors: ['time']

          })

          .then(collected => {

            collected.first().delete();

            boi = collected.first().content;

            let boi2;

            msg.edit('🤵 **| من فضلك اكتب من صنع هذا الكود الأن... ✏ **').then(msg => {



              message.channel.awaitMessages(filter, {

                max: 1,

                time: 90000,

                errors: ['time']

              })

              .then(collected => {

                collected.first().delete();

              boi2 = collected.first().content;

      msg.edit('🛡 **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');

 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{

        max: 1,

        time: 90000,

        errors: ['time']

      })

      .then(collected => {

        if(collected.first().content === 'لا') {

          msg.delete();

          message.delete();

          thisFalse = false;

        }

        if(collected.first().content === 'نعم') {

          if(thisFalse === false) return;

          msg.edit('🕊 **| Done ✅, تم بنجاح نشر كودك في روم الاكواد**');

          collected.first().delete();

          jscodes.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**Toxic Codes© ⬇**
\`\`\`css
${thisMessage}\`\`\`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**وصف الكود**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الكود**: ${boi2}`);

        }

      }

  );

});

    });

  }

    );

  });

}

);

    })}});


client.on('message',async message => {
 
  if(message.content.startsWith(prefix + "css")) {

if(!message.channel.guild) return message.reply(' ');

  let rank = message.guild.member(message.author).roles.find('name', '• Omni Support.', '● Support plus.');

  if (!rank) return message.channel.send('🛑 **| يجب ان تمتلك رتبة سبورت لأستخدام هذا الأمر.**');

  let jscodes = message.guild.channels.find(`name`, "❖-discord-css ");

  if(!jscodes) return message.channel.send("❌لم اجد الروم الخاص بنشر الاكواد");

    let filter = m => m.author.id === message.author.id;

    let thisMessage;

    let thisFalse;

    message.channel.send('📝 **| من فضلك اكتب الكود الأن... ✏ **').then(msg => {



    message.channel.awaitMessages(filter, {

      max: 1,

      time: 90000,

      errors: ['time']

    })

    .then(collected => {

      collected.first().delete();

      thisMessage = collected.first().content;

      let boi;

      msg.edit('📜 **| من فضلك اكتب وصف الكود الأن... ✏ **').then(msg => {



          message.channel.awaitMessages(filter, {

            max: 1,

            time: 90000,

            errors: ['time']

          })

          .then(collected => {

            collected.first().delete();

            boi = collected.first().content;

            let boi2;

            msg.edit('🤵 **| من فضلك اكتب من صنع هذا الكود الأن... ✏ **').then(msg => {



              message.channel.awaitMessages(filter, {

                max: 1,

                time: 90000,

                errors: ['time']

              })

              .then(collected => {

                collected.first().delete();

              boi2 = collected.first().content;

      msg.edit('🛡 **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');

 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{

        max: 1,

        time: 90000,

        errors: ['time']

      })

      .then(collected => {

        if(collected.first().content === 'لا') {

          msg.delete();

          message.delete();

          thisFalse = false;

        }

        if(collected.first().content === 'نعم') {

          if(thisFalse === false) return;

          msg.edit('🕊 **| Done ✅, تم بنجاح نشر كودك في روم الاكواد**');

          collected.first().delete();

          jscodes.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**Toxic Codes© ⬇**
\`\`\`css
${thisMessage}\`\`\`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**وصف الكود**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الكود**: ${boi2}`);

        }

      }

  );

});

    });

  }

    );

  });

}

);

    })}});

const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1100);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "✽-welcome");
    logChannel.send(`${member} **Invited by:** <@${inviter.id}>`);
  });
});

client.on('message',async message => {
 
  if(message.content.startsWith(prefix + "php")) {

if(!message.channel.guild) return message.reply(' ');

  let rank = message.guild.member(message.author).roles.find('name', '• Omni Support.', '● Support plus.');

  if (!rank) return message.channel.send('🛑 **| يجب ان تمتلك رتبة سبورت لأستخدام هذا الأمر.**');

  let jscodes = message.guild.channels.find(`name`, "❖-discord-php");

  if(!jscodes) return message.channel.send("❌لم اجد الروم الخاص بنشر الاكواد");

    let filter = m => m.author.id === message.author.id;

    let thisMessage;

    let thisFalse;

    message.channel.send('📝 **| من فضلك اكتب الكود الأن... ✏ **').then(msg => {



    message.channel.awaitMessages(filter, {

      max: 1,

      time: 90000,

      errors: ['time']

    })

    .then(collected => {

      collected.first().delete();

      thisMessage = collected.first().content;

      let boi;

      msg.edit('📜 **| من فضلك اكتب وصف الكود الأن... ✏ **').then(msg => {



          message.channel.awaitMessages(filter, {

            max: 1,

            time: 90000,

            errors: ['time']

          })

          .then(collected => {

            collected.first().delete();

            boi = collected.first().content;

            let boi2;

            msg.edit('🤵 **| من فضلك اكتب من صنع هذا الكود الأن... ✏ **').then(msg => {



              message.channel.awaitMessages(filter, {

                max: 1,

                time: 90000,

                errors: ['time']

              })

              .then(collected => {

                collected.first().delete();

              boi2 = collected.first().content;

      msg.edit('🛡 **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');

 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{

        max: 1,

        time: 90000,

        errors: ['time']

      })

      .then(collected => {

        if(collected.first().content === 'لا') {

          msg.delete();

          message.delete();

          thisFalse = false;

        }

        if(collected.first().content === 'نعم') {

          if(thisFalse === false) return;

          msg.edit('🕊 **| Done ✅, تم بنجاح نشر كودك في روم الاكواد**');

          collected.first().delete();

          jscodes.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**Toxic Codes© ⬇**
\`\`\`css
${thisMessage}\`\`\`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**وصف الكود**: ${boi}
**تم النشر بواسطة**: ${message.author}
**المصدر / الشخص الذي صنع الكود**: ${boi2}`);

        }

      }

  );

});

    });

  }

    );

  });

}

);

    })}});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);