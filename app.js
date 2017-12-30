// const { CommandoClient } = require('discord.js-commando');
// const path = require('path');
    
// const client = new CommandoClient({
//     commandPrefix: '!',
//     unknownCommandResponse: false,
//     owner: process.env.OWNER_ID,
//     disableEveryone: true
// });

// client.registry
//     .registerDefaultTypes()
//     .registerGroups([
//         ['basic', 'Our Basic Command Group']
//     ])
//     .registerDefaultGroups()
//     .registerDefaultCommands()
//     .registerCommandsIn(path.join(__dirname, 'commands'));

// client.on('ready', () => {
//     console.log('Logged in!');
//     client.user.setGame('Twitch Tv');
// });

// client.login(process.env.BOT_TOKEN);


const Discord = require('discord.js');
const client = new Discord.Client();

const { MessageHandler } = require('handlers/message');



let ownerID = process.env.OWNER_ID

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
//   if (message.content === 'ping') {
//     message.reply('pong');
    
    MessageHandler.handle(message);



  }
});

client.login(process.env.BOT_TOKEN);