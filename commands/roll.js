const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    user = message.guild.member(message.mentions.users.first()).user;

}

module.exports.help = {
    name: 'roll'
}