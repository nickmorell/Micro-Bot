module.exports.run = async (bot, message, args) => {
    console.log('ping works!');
    message.reply('pong!')
}

module.exports.help = {
    name: 'ping'
}