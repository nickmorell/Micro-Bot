const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    user = message.guild.member(message.mentions.users.first()).user;

    if(!user) return message.reply('Please mention the user you want info for.');



    let embed = new Discord.RichEmbed()
            .setAuthor(user.username)
            // .setDescription("This is the users info!")
            .setColor('#9B59B6')
            .addField('Full Username', `${user.username}#${user.discriminator}`)
            .addField('ID', `${user.id}`)
            .addField('Created At', `${user.createdAt}`)
            // .setField('Full Username', `${message.author.username}#${message.author.discriminator}`)
            // .setField('Full Username', `${message.author.username}#${message.author.discriminator}`)
            ;
    
        message.channel.send({embed: embed});
}

module.exports.help = {
    name: 'whois'
}