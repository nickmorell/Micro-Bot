const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ding',
            group: 'basic',
            memberName: 'ding',
            description: 'Dongs back to you',
            examples: ['ding']
        });
    }

    run(msg) {
        return msg.say('@' + msg.author.id +' dong');
    }
};