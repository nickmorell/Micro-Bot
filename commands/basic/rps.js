const { Command } = require('discord.js-commando');
const string = require('lodash/string');
const util = require('util');

module.exports = class RPSCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'rps',
            group: 'basic',
            memberName: 'rps',
            description: 'Play rock paper scisscors with Micro.',
            examples: ['rps rock'],
            args: [
                {
                    key: 'choice',
                    type: 'string'
                }
            ]
        });
    }

    run(msg, args) {
        let drawMsg = 'I chose %s. Looks like we have ourselves a draw';
        let defeatMsg = 'I chose %s. You got the best of me this time.';
        let victoryMsg = 'I chose %s. Better luck next time.'

        const { choice } = args;
        const choices = ['rock', 'paper', 'scissors'];
        var botChoice = choices[Math.floor(Math.random()*choices.length)];
        let returnMsg = '';
        choice = string.lowerCase(choice);

        if(choice == botChoice)
            returnMsg = util.format(drawMsg, botChoice);
        else if(choice === 'paper' && botChoice === 'rock')
            returnMsg = util.format(victoryMsg, botChoice);
        else if(choice === 'paper' && botChoice === 'scissors')
            returnMsg = util.format(defeatMsg, botChoice);
        else if(choice === 'rock' && botChoice === 'scissors')
            returnMsg = util.format(victoryMsg, botChoice);
        else if(choice === 'rock' && botChoice === 'paper')
            returnMsg = util.format(defeatMsg, botChoice);
        else if(choice === 'scissors' && botChoice === 'paper')
            returnMsg = util.format(victoryMsg, botChoice);
        else if(choice == 'scissors' && botChoice === 'rock')
            returnMsg = util.format(defeatMsg, botChoice);
        return msg.reply(returnMsg);
    }
};