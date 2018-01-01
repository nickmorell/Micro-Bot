module.exports.run = async (bot, message, args) => {
    
  let choice = Math.floor(Math.random() * 9) % 2;

  if(choice === 0)
    message.reply('Heads!');
  else if(choice === 1)
    message.reply('Tails!');
  else{
      message.reply('Something went wrong! Try again.');
      console.error(`flipcoin error: Value chosen is ${choice}`);
  }
}

module.exports.help = {
    name: 'flipcoin'
}