const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    message.reply(`There are ${message.guild.memberCount} members in the server including me.`);
}

module.exports.help = {
    name: 'membercount'
}