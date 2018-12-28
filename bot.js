const Discord = require('discord.js');
const fs = require('fs');
const moment = require('moment');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});







client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**
         ------------------------------
             اوامر نسخه البلس
          -setwatch : لتغير الوتشيق حق البوت
          -setlis : لتغير الليسنيق حق البوت
          -setname : لتغير اسم البوت
          -setavatar : لتغير صوره البوت
          -setT : لتغير الستريمنج حق البوت
          -setgame : لتغير البلاينق حق البوت
         ------------------------------
               اوامر البرودكاست
         -bc : برودكاست لجميع اعضاء السيرفر بدون ايمبد
         -obc : برودكاست للاعضاء  الاونلاين فقط
         ------------------------------
                  اوامر عامه
         -id : عرض ملفك الشخصي
         -bot : لرويه معلومات البوت
         -user : عرض معلوماتك في الديسكورد
         -date : لرويه التاريخ 
         -image : لعرض صوره السيرفر
         -ping : لرويه البنق حقك
         -voice : لرويه عدد الاشخاص الفي الرومات الصوتيه
         -bans : لرويه عدد المحظورين من السيرفر
         ------------------------------
               اوامر اداريه  
         -ban : حظر العضو من السيرفر
         -unban : لازاله الحظر عن العضو
         -kick : طرد العضو من السيرفر
         -clear : مسح الشات
         -server : احصائيات السيرفر
         -mute : لاسكت شخص
         -unmute : لازاله الاسكت عن الشخص
         -role : لاعطاء شخص رتبه
         -move : لسحب شخص الي الروم حقكك
         ------------------------------
         رابط سيرفر السبوتر : https://discord.gg/ajd2waP
         ------------------------------
         -help : عرض هذه الرسالة
         ------------------------------
         
       **  `)
   message.author.sendEmbed(embed)
   
   }
   });  
client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});






var prefix = "-"
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "510520286488035339") return;

  
  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`**Watch Now: ${argresult}**`)
} 

 
  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`**LISTENING Now: ${argresult}**`)
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**Username Changed To ${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`**Avatar Changed Successfully To ${argresult}**`);
}

if (message.content.startsWith(prefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}**`)
} 
if (message.content.startsWith(prefix + 'setgame')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`**Playing: ${argresult}**`)
} 



});




client.on('message', message => {
         
 
    if (message.content.startsWith(prefix + "user")) {
     
     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات `);
   
         message.guild.fetchInvites().then(invs => {
  let member = client.guilds.get(message.guild.id).members.get(message.author.id);
  let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
  let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
  var moment = require('moment');
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
   
  .setColor("#0a0909")
  .setThumbnail(message.author.avatarURL)
  .addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true)
  .addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
  .addField(` :لقد قمت بدعوة `, ` ${inviteCount} `)
   
   
  .setFooter(message.author.username, message.author.avatarURL)  
  message.channel.sendEmbed(id);
  })
  }
   
   
   
  });













  client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
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








client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});







client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
    let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
    if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
    if (!args[1]) {
    return;
    }
      message.guild.members.forEach(m => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return;
          var bc = new Discord.RichEmbed()
          .addField('# | الرسالة ', args)
          .setThumbnail(message.guild.iconURL)
          .setColor('RANDOM')
          m.sendMessage(args)
      });
             if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(":x: **ليس لديك الصلاحيه لعمل برودكاست**");
      const AziRo = new Discord.RichEmbed()   
      .setColor('RANDOM')
      message.channel.sendEmbed(AziRo);          
    }
    } else {
      return;
    }
    });



    client.on("message", message => {
    
                if (message.content.startsWith(prefix + "obc")) {
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
        var prefix = "-" // البريفكس
        if(message.content.startsWith(prefix +"server")){ // الامر
          if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** :negative_squared_cross_mark: `)
        if(!message.channel.guild) return message.reply(' ');
        const millis = new Date().getTime() - message.guild.createdAt.getTime();
        const now = new Date();
        const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
        const days = millis / 1000 / 60 / 60 / 24;
        let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
        var embed  = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**🆔 Server ID:**", message.guild.id,true)
        .addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
        .addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
        .addField("**👥 Members**",`[${message.guild.memberCount}]`,true)
        .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
        .addField("**🌍 Others **" , message.guild.region,true)
        .addField("**🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
        .setColor('#000000')
        message.channel.sendEmbed(embed)
         
        }
        });








        client.on('message', async message =>{
            if (message.author.boss) return;
              var prefix = "-";
          
          if (!message.content.startsWith(prefix)) return;
              let command = message.content.split(" ")[0];
               command = command.slice(prefix.length);
              let args = message.content.split(" ").slice(1);
              if (command == "mute") {
                  if (!message.channel.guild) return;
                  if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
                  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
                  let user = message.mentions.users.first();
                  let muteRole = message.guild.roles.find("name", "Muted");
                  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
                  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
                  let reason = message.content.split(" ").slice(2).join(" ");
                  message.guild.member(user).addRole(muteRole);
                  const muteembed = new Discord.RichEmbed()
                  .setColor("RANDOM")
                  .setAuthor(`Muted!`, user.displayAvatarURL)
                  .setThumbnail(user.displayAvatarURL)
                  .addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
                  .addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
                  .addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
                  .addField("User", user, true)
                  message.channel.send({embed : muteembed});
                  var muteembeddm = new Discord.RichEmbed()
                  .setAuthor(`Muted!`, user.displayAvatarURL)
                  .setDescription(`      
          ${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
          ${message.author.tag} تمت معاقبتك بواسطة
          [ ${reason} ] : السبب
          اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
          `)
                  .setFooter(`في سيرفر : ${message.guild.name}`)
                  .setColor("RANDOM")
              user.send( muteembeddm);
            }
          if(command === `unmute`) {
            if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))
          
            let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
            if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
          
            let role = message.guild.roles.find (r => r.name === "Muted");
            
            if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
          
            await toMute.removeRole(role)
            message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
          
            return;
          
            }
          
          });
 
          



           
           




            client.on('message', message => {
              var prefix = "-"
              if (message.content.startsWith(prefix + 'id')) {
                  if (message.author.bot) return
                  if (!message.guild) return message.reply('**This Command Just In Servers**')
                  message.guild.fetchInvites().then(invs => {
                      let personalInvites = invs.filter(i => i.inviter.id === message.author.id)
                      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0)
                    var roles = message.member.roles.map(roles => `**__${roles.name}__ |**`).join(` `)
                  let id = new Discord.RichEmbed()
                  .setColor('RANDOM')
                  .setTitle(':clipboard: | User identity info')
                  .setAuthor(message.author.username,message.author.avatarURL)
                  .addField('• Name :', message.author.username,true)
                  .addField('• Tag :', message.author.discriminator,true)
                  .addField('• ID :', message.author.id,true)
                  .addField('• JoinedAt :', moment(message.joinedAt).format('D/M/YYYY h:mm a '),true)
                  .addField('• CreatedAt :', moment(message.joinedAt).format('D/M/YYYY h:mm a '),true)
                  .addField('• Total invites :', inviteCount,true)
                  .addField('• Roles :', roles)
                  .setTimestamp()
                  message.channel.sendEmbed(id).then(c => {
                      c.react('📋')
                          })
                      })
                  }
             
                 
          });
        



          client.on('message', message => {
            if (message.author.x5bz) return;
            if (!message.content.startsWith(prefix)) return;
          
            let command = message.content.split(" ")[0];
            command = command.slice(prefix.length);
          
            let args = message.content.split(" ").slice(1);
          
            if (command == "ban") { // الانر
                         if(!message.channel.guild) return message.reply('** This command only for servers**');
                   
            if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
            if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
            let user = message.mentions.users.first();
            let reason = message.content.split(" ").slice(2).join(" ");
            /*let b5bzlog = client.channels.find("name", "5bz-log");
            if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
            if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
            if(!reason) return message.reply ("**اكتب سبب الطرد**");
            if (!message.guild.member(user)
            .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
          
            message.guild.member(user).ban(7, user);
          
            const banembed = new Discord.RichEmbed()
            .setAuthor(`BANNED!`, user.displayAvatarURL)
            .setColor("RANDOM")
            .setTimestamp()
            .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
            .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
            .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
            message.channel.send({
              embed : banembed
            })
          }
          });
          
          
          
          




          client.on('message', message => {
            if (!message.channel.guild) return;
    if(message.content =='-members')
    var IzRo = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setFooter(message.author.username, message.author.avatarURL) 
    .setTitle(':tulip:| Members info')
    .addBlankField(true)
    .addField(':green_book:| Online ',
    `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
    .addField(':closed_book:|  Dnd ',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
    .addField(':orange_book:| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
    .addField(':notebook:| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
    .addField('Member Server Count',`${message.guild.memberCount}`)
    message.channel.send(IzRo);
  });
















const HeRo = new Discord.Client();
client.on('message', message => {
var prefix = "-";

  if (message.content === prefix + "date") {
      if (!message.channel.guild) return message.reply('** This command only for servers **');  
      var currentTime = new Date(),
          Year = currentTime.getFullYear(),
          Month = currentTime.getMonth() + 1,
          Day = currentTime.getDate();

          var Date15= new Discord.RichEmbed()
          .setTitle("**!~[ التاريخ ]~! **")
          .setColor('RANDOM')
          .setTimestamp()
          .setDescription( ""+ Day + "-" + Month + "-" + Year + "")
           message.channel.sendEmbed(Date15);
  }
});







client.on("message", message => {
  const prefix = "-"
            
        if(!message.channel.guild) return;
 if(message.author.bot) return;
    if(message.content === "-image"){ 
        const embed = new Discord.RichEmbed()

    .setTitle(`هذا هو شعار سيرفر ** ${message.guild.name} **`)
.setAuthor(message.author.username, message.guild.iconrURL)
  .setColor("PURPLE")
  .setImage(message.guild.iconURL)
  .setURL(message.guild.iconrURL)
                  .setTimestamp()

 message.channel.send({embed});
    }
});











client.on('message', message => {
  var prefix = "-"
if (message.author.x5bz) return;
if (!message.content.startsWith(prefix)) return;

let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

if (command == "kick") {
             if(!message.channel.guild) return message.reply('** This command only for servers**');
       
if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
let reason = message.content.split(" ").slice(2).join(" ");
if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
if(!reason) return message.reply ("**اكتب سبب الطرد**");
if (!message.guild.member(user)
.kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

message.guild.member(user).kick();

const kickembed = new Discord.RichEmbed()
.setAuthor(`KICKED!`, user.displayAvatarURL)
.setColor("RANDOM")
.setTimestamp()
.addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
.addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
.addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
message.channel.send({
  embed : kickembed
})
}
});

















client.on('message', msg => {
if(msg.content.startsWith(prefix + "bot")) {
let embed24 = new Discord.RichEmbed()   
 .setThumbnail(client.user.avatarURL)
 .setColor("RANDOM")  
 .setTitle(`🤖**Information about**🤖 || ${client.user.tag}`, true)
 .addField("📜**Name + Tag**📜", client.user.tag, true)
 .addField(`***Prefix Bot***`,`**${prefix}**`, true)
 .addField("🤖**Bot Join Servers**🤖", client.guilds.size, true)
 .addField("👥**Sender**👥", msg.author.tag, true)
 .addField("🤖🆔 *Bot ID** 🆔🤖 ", client.user.id, true)
 .addField("📆**Bot Created At**📆", `${moment(client.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(client.user.createdAt).fromNow()}\``, true)
 .addField("🤖**User**🤖", client.users.size, true)

 .setFooter(`${msg.author.tag}`, `${msg.author.avatarURL}`, true)
msg.channel.sendEmbed(embed24)
}
});




client.on('message', message => {
  if(!message.channel.guild) return;
if (message.content.startsWith('-ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms")
.addField('**WebSocket:**',api + " ms")
message.channel.send({embed:embed});
}
});









client.on('message', message => {
  if (message.content.startsWith("-bans")) {
      message.guild.fetchBans()
      .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
.catch(console.error);
}
});















client.on('message' , message => {
  if(message.content === '-voice') { // الامر
      message.channel.send(`**عدد الاشخاص الموجودين بـ  الرومات الصوتيه : ${message.guild.members.filter(g => g.voiceChannel).size}**`);
  }
  });










  client.on('message', message => {
    var prefix = "-";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});









 client.on("message", message => {
	var prefix = "-";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});











client.login(process.env.BOT_TOKEN);
