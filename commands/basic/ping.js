const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            group: 'basic',
            memberName: 'ping',
            description: 'Pongs back to you',
            examples: ['ping']
        });
    }

    run(msg) {
        return msg.say('pong');
    }
};