const config = require('./config.json');
const Discord = require('discord.js');
const fs = require('fs');
const {Client} = require('pg');

const bot = new Discord.Client({
    disableEveryone: true
});

// const POSTGRES_CLIENT = new Client({
//     connectionString: '',
//     ssl: true
// });

// POSTGRES_CLIENT.connect()
// .then(con =>{
//     console.log("Connection to postgress successful");
// })
// .catch(err =>{
//     console.error('Unable to connect to Postress DB.');
// });

bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === 'js');
    if(jsfiles.length <= 0) {
        console.log('No commands to load!');
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f,i) => {
        let props = require(`./commands/${f}`);
        console.log(`${i+1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });

});


bot.on('ready', () =>{
    console.log(`Bot is ready! ${bot.user.username}`);
    console.log(bot.commands);
    bot.generateInvite(["ADMINISTRATOR"])
    .then(link => {
        console.log(link);
    }).catch(err =>{
        console.error(err.stack);
    });
});



bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let msgArray = message.content.split(" ");
    let command = msgArray[0];
    let args = msgArray.slice(1);

    if(!message.content.startsWith(config.prefix)) return;

    let cmd = bot.commands.get(command.slice(config.prefix.length));

    if(cmd) cmd.run(bot, message, args);

    // if(command === `${config.prefix}mute`){
    //     if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You do not have manage messages.');


    //     let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    //     if(!toMute) return message.channel.send('You did not specify a user mention or ID!');
       
    //     if(toMute.id === message.author.id) return message.channel.send("You cannot mute yourself.");
    //     if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("You cannot mute a member who is higher or has the same role as you.");

    //     let role = message.guild.roles.find(r => r.name === 'MICRO_MUTED');
    //     if(!role){
    //         try{
    //             role = await message.guild.createRole({
    //                 name: 'MICRO_MUTED',
    //                 color: '#000000',
    //                 permissions: []
    //             });

    //             message.guild.channels.forEach(async (channel, id) => {
    //                 await channel.overwritePermissions(role, {
    //                     SEND_MESSAGES: false,
    //                     ADD_REACTIONS: false
    //                 });
    //             });
    //         }catch(e){
    //             console.error(e.stack);
    //         }
    //     }

    //     if(toMute.roles.has(role.id)) return message.channel.send('This user is already muted!');

    //     await toMute.addRole(role);
    //     message.channel.send('I have muted them.');

    //     return message.reply(toMute.username || toMute.user.username);
    // }

    // if(command === `${config.prefix}unmute`){
    //     if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You do not have manage messages.');

    //     console.log(args[0]);
    //     let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    //     console.log(toMute);
    //     if(!toMute) return message.channel.send('You did not specify a user mention or ID!');
       
    //     let role = message.guild.roles.find(r => r.name === 'MICRO_MUTED');

    //     if(!role || !toMute.roles.has(role.id)) return message.channel.send('This user is not muted!');

    //     await toMute.removeRole(role);
    //     message.channel.send('I have unmuted them.');

    //     return message.reply(toMute.username || toMute.user.username);
    // }
    



});

let token = process.env.BOT_TOKEN || config.token;
bot.login(token);