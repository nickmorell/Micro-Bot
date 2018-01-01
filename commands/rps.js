module.exports.run = async (bot, message, args) => {

    let choices = ['rock', 'paper', 'scissors'];
    let botChoice = choices[Math.floor(Math.random() * choices.length)];
    let playerChoice = args[0];
    
    if(!playerChoice){
        message.reply(`Please choose arguments from the following list: ${choices}`);
        return;
    }

    if(playerChoice === botChoice)
        message.reply(`I chose ${botChoice}. Draw!`);
    else if(
        playerChoice === 'rock' && botChoice === 'scissors' ||
        playerChoice === 'scissors' && botChoice === 'paper' ||
        playerChoice === 'paper' && botChoice === 'rock'
    )
        message.reply(`I chose ${botChoice}. You win this time.`);
    else if(
        playerChoice === 'rock' && botChoice === 'paper' ||
        playerChoice === 'paper' && botChoice === 'scissors' ||
        playerChoice === 'scissors' && botChoice === 'rock'
    )
        message.reply(`I chose ${botChoice}. Better luck next time.`);
    else 
        message.reply(`Please choose arguments from the following list: ${choices}`);

}

module.exports.help = {
    name: 'rps'
}