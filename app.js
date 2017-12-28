const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: '!',
    unknownCommandResponse: false,
    owner: process.env.OWNER_ID,
    disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['basic', 'Our Basic Command Group']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log('Logged in!');
    client.user.setGame('Game');
});

client.login(process.env.BOT_TOKEN);